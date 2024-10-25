package com.x.organization.assemble.personal.jaxrs.empower;

import java.util.List;

import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.entity.JpaObject;
import com.x.base.core.project.bean.WrapCopier;
import com.x.base.core.project.bean.WrapCopierFactory;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.organization.assemble.personal.Business;
import com.x.organization.core.entity.accredit.Empower;

import io.swagger.v3.oas.annotations.media.Schema;

class ActionListWithCurrentPersonEnable extends BaseAction {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActionListWithCurrentPersonEnable.class);

	ActionResult<List<Wo>> execute(EffectivePerson effectivePerson) throws Exception {

		LOGGER.debug("execute:{}.", effectivePerson::getDistinguishedName);

		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			Business business = new Business(emc);
			ActionResult<List<Wo>> result = new ActionResult<>();
			List<Wo> wos = this.list(business, effectivePerson);
			result.setData(wos);
			return result;
		}
	}

	private List<Wo> list(Business business, EffectivePerson effectivePerson) throws Exception {
		List<Empower> os = business.entityManagerContainer().listEqualAndEqual(Empower.class,
				Empower.FROMPERSON_FIELDNAME, effectivePerson.getDistinguishedName(), Empower.ENABLE_FIELDNAME, true);
		return Wo.copier.copy(os);
	}

	@Schema(name = "com.x.organization.assemble.personal.jaxrs.empower.ActionListWithCurrentPersonEnable$Wo")
	public static class Wo extends Empower {

		private static final long serialVersionUID = 4279205128463146835L;

		static WrapCopier<Empower, Wo> copier = WrapCopierFactory.wi(Empower.class, Wo.class, null,
				JpaObject.FieldsInvisible);

	}

}
