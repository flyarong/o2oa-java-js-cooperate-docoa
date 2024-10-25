MWF.xApplication = MWF.xApplication || {};
MWF.xApplication.attendancev2 = MWF.xApplication.attendancev2 || {};
MWF.xApplication.attendancev2.LP={
	"title": "Gestión de asistencia",
	"menu": {
		"myAttendance": "Mi asistencia",
		"myStatistic": "Mis estadísticas",
		"myAppealList": "Mis excepciones de asistencia",
		"statistic": "Estadísticas de asistencia",
		"detailStatisticFilter": "Estadísticas resumidas",
		"detailFilter": "Estadísticas diarias",
		"recordList": "Registros originales",
		"appealList": "Datos anormales",
		"config": "Configuración",
		"shiftManager": "Gestión de turnos",
		"groupmanager": "Gestión de grupos de asistencia",
		"addressmanger": "Gestión de lugares de trabajo",
		"leavemanager": "Registros de ausencia",
		"configmanager": "Gestión de configuración"
	},
	"alert": "Alerta",
	"operate": "Operar",
	"choose": "Elegir",
	"save": "Guardar",
	"delete": "Eliminar",
	"update": "Modificar",
	"search": "Buscar",
	"statisticExport": "Exportar (recursivo)",
	"positive": "Aceptar",
	"cancel": "Cancelar",
	"add": "Agregar",
	"more": "Más",
	"dataError": "Error de datos",
	"saveSuccess": "Guardado exitoso",
	"onDuty": "Registro entrada",
	"onDutySimple": "Entrada",
	"offDuty": "Registro salida",
	"offDutySimple": "Salida",
	"yes": "Sí",
	"no": "No",
	"firstPage": "1ª pág.",
	"lastPage": "últ. pág.",
	"until": "Hasta",
	"day": {
		"Sunday": "Dom",
		"Monday": "Lun",
		"Tuesday": "Mar",
		"Wednesday": "Mié",
		"Thursday": "Jue",
		"Friday": "Vie",
		"Saturday": "Sáb"
	},
	"daySimple": {
		"Sunday": "Dom",
		"Monday": "Lun",
		"Tuesday": "Mar",
		"Wednesday": "Mié",
		"Thursday": "Jue",
		"Friday": "Vie",
		"Saturday": "Sáb"
	},
	"month": " ",
	"year": " ",
	"minute": "m",
	"hour": "h",
	"classifierDay": "d",
	"times": "veces",
	"components": {
		"chooseTimePlaceholder": "Seleccionar hora",
		"timeMinutesSelectorClosePlaceholder": "Cerrar",
		"timeMinutesSelectorHour": "Hora",
		"timeMinutesSelectorMinute": "Minuto",
		"chooseDatePlaceholder": "Seleccionar fecha",
		"selectPlaceholder": "Seleccionar",
		"selectOrgPersonOverCount": "¡Solo se pueden seleccionar ({count}) datos!"
	},
	"myAttendanceTitle": "Mis estadísticas",
	"myAttendanceCalendar": "Calendario de asistencia",
	"myAttendanceStatistic": "Estadísticas de asistencia",
	"myFieldWork": "Trabajo de campo",
	"myStatistic": {
		"title": "Ciclo de asistencia:",
		"averageWorkTimeDuration": "Jornada laboral media (horas)",
		"workTimeDuration": "Jornada laboral media (horas)",
		"attendance": "Asistencia (días)",
		"nosignTimes": "Tarjeta faltante (veces)",
		"lateTimes": "Tarde (tiempos)",
		"leaveEarlierTimes": "Salida temprano (horarios)",
		"leaveDays": "licencia (días)",
		"absenteeismDays": "Ausentismo (días)",
		"fieldWorkTimes": "Trabajo de campo (tiempos)"
	},
	"shiftTitle": "Gestión de turnos",
	"addShift": "Agregar turno",
	"editShift": "Modificar turno",
	"shiftName": "Nombre del turno",
	"checkInTime": "Hora de registro",
	"shiftSelector": "Seleccionar turno",
	"shiftForm": {
		"shiftNameLabel": "Nombre del turno",
		"shiftNameLabelPlaceholder": "Ingrese el nombre del turno",
		"checkInTimeLabel": "Horario de entrada y salida",
		"seriousTardinessLateMinutesLabel": "Minutos de retraso grave",
		"absenteeismLateMinutesLabel": "Minutos de ausentismo y retraso",
		"seriousTardinessLateMinutesNeedNumber": "Los minutos de retraso grave deben ser numéricos",
		"absenteeismLateMinutesNeedNumber": "Los minutos de ausentismo y retraso deben ser numéricos",
		"firstTimeLabel": "Primera entrada y salida",
		"secondTimeLabel": "Segunda entrada y salida",
		"thirdTimeLabel": "Tercera entrada y salida",
		"oneTimeDayLabel": "1 vez al día",
		"secondTimeDayLabel": "2 veces al día",
		"thirdTimeDayLabel": "3 veces al día",
		"onDutyTimeLabel": "Hora de entrada:",
		"beforeOnDutyTimeLabel": "Intervalo de registro: Antes de entrar",
		"beforeOnDutyTimePlaceholder": "Por favor, elija el horario antes del trabajo.",
		"afterOnDutyTimePlaceholder": "Por favor, elija el horario después del trabajo.",
		"afterOnDutyTimeLabel": "Después de entrar",
		"offDutyTimeLabel": "Hora de salida:",
		"offDutyNextDayLabel": "Si cruzar el cielo después del trabajo",
		"beforeOffDutyTimeLabel": "Intervalo de registro: Antes de salir",
		"beforeOffDutyTimePlaceholder": "Por favor, elija la hora antes del trabajo.",
		"afterOffDutyTimePlaceholder": "Por favor, elija la hora después del trabajo.",
		"afterOffDutyTimeLabel": "Después de salir",
		"lateAndEarlyOnTimeLabel1": "Retraso máximo permitido para la entrada:",
		"lateAndEarlyOnTimeLabel2": " sin contar como retraso",
		"lateAndEarlyOffTimeLabel1": "Salida anticipada máxima permitida:",
		"lateAndEarlyOffTimeLabel2": " sin contar como salida anticipada",
		"shiftNameNotEmpty": "¡El nombre del turno no puede estar vacío!",
		"onDutyTimeNotEmpty": "¡La hora de entrada no puede estar vacía!",
		"offDutyTimeNotEmpty": "¡La hora de salida no puede estar vacía!",
		"success": "¡Guardado exitoso!",
		"confirmDelete": "¿Estás seguro de que deseas eliminar esta información de 【{name}】?",
		"selectShiftEmpty": "Seleccione un turno",
		"workTimeLabel": "Horas de trabajo por turnos",
		"workTimeTotal": "Duración total del trabajo",
		"needWorkTimeLimit": "¿¿ se registra la duración insuficiente como salida temprana?"
	},
	"workAddressManagerTitle": "Gestión de lugares de trabajo",
	"workAddressSelector": "Seleccionar lugar de trabajo",
	"workAddressAdd": "Agregar lugar de trabajo",
	"workAddressView": "Ver el lugar de trabajo",
	"workAddressName": "Nombre del lugar",
	"workAddressRange": "Rango de error",
	"workAddressDesc": "Descripción",
	"workAddressMapKeyConfigEmpty": "¡¡ por favor, establezca el Servicio de mapas primero!",
	"workAddressBDkeyConfigBtn": "Configurar el Servicio de mapas",
	"workAddressBDkeyConfig": "Configuración del Servicio de mapas",
	"workAddressBDkeyConfigDesc": "La gestión del lugar de Trabajo utiliza el Servicio de mapas. actualmente admite mapas Baidu y mapas gaode. necesita registrar su cuenta de mapas correspondiente para obtener la clave para usarlo normalmente. Rellene la clave en el cuadro de entrada de abajo.",
	"workAddressBDLinkTitle": "Haga clic aquí para abrir el canal de registro de mapas de baidu",
	"workAddressAMAPLinkTitle": "Haga clic aquí para abrir el canal de registro de mapas de gaode",
	"workAddressBDSecretTitle": "BAIDU Clave (AK)",
	"workAddressAMPSecretTitle": "GAODE Clave (AK)",
	"workAddressBDSecretTitlePlaceholder": "Ingresa la clave (AK) de la aplicación de mapas",
	"workAddressForm": {
		"lnglatNotEmpty": "¡Selecciona un lugar de trabajo en el mapa primero!",
		"title": "Nombre del lugar",
		"titlePlaceholder": "Ingresa el nombre del lugar",
		"titleNotEmpty": "¡El nombre del lugar no puede estar vacío!",
		"range": "Rango de registro (metros)",
		"rangePlaceholder": "Ingresa el rango de registro (metros)",
		"rangeNotEmpty": "¡El rango de registro (metros) no puede estar vacío!",
		"desc": "Descripción",
		"descPlaceholder": "Ingresa información adicional",
		"rangeNeedNumber": "¡El rango de registro (metros) debe ser un número!",
		"success": "¡Guardado exitoso!",
		"confirmDelete": "¿Estás seguro de que deseas eliminar este lugar de trabajo 【{name}】?",
		"selectWorkAddressEmpty": "Selecciona al menos un lugar de trabajo",
		"locationCoordinateInfo": "Haga clic en el mapa para localizar la dirección del lugar de trabajo",
		"locationCoordinateLabel": "Coordenadas de posicionamiento: "
	},
	"groupManagerTitle": "Gestión de grupos de asistencia",
	"groupAdd": "Agregar grupo de asistencia",
	"groupUpdate": "Modificar grupo de asistencia",
	"groupForm": {
		"title": "Nombre del grupo de asistencia",
		"titlePlaceholder": "Ingresa el nombre del grupo de asistencia",
		"titleErrorNotEmpty": "¡El nombre del grupo de asistencia no puede estar vacío!",
		"num": "Cantidad",
		"status": "Estado",
		"status_unpublish": "No publicado",
		"status_normal": "Normal",
		"checkType": "Tipo de asistencia",
		"checkTypeError": "¡Tipo de asistencia incorrecto!",
		"checkTypeFix": "Turno fijo",
		"checkTypeFree": "Horario flexible",
		"checkTypeArrangement": "Sistema de programación",
		"arrangementSettings": "Configuración de la programación",
		"arrangementEditTitle": "Programación editorial",
		"tableThDay": "Día laborable",
		"tableThShift": "Turno",
		"time": "Configuración de días laborables",
		"timeErrorNotEmpty": "¡Selecciona los días laborables!",
		"participates": "Participantes de asistencia y organización",
		"participatesPlaceholder": "Haz clic para seleccionar participantes de asistencia y organización",
		"participatesErrorNotEmtpy": "¡Los participantes de asistencia y organización no pueden estar vacíos!",
		"unParticipates": "Personal no requerido para asistencia",
		"unParticipatesPlaceholder": "Haz clic para seleccionar personal no requerido para asistencia",
		"assistAdminList": "Ayudar a los administradores",
		"assistAdminListPlaceholder": "Haga clic para elegir ayudar al Administrador",
		"shift": "Turno",
		"shiftChange": "Cambiar turno",
		"shiftChangeMultiple": "Cambiar múltiples turnos",
		"shiftEmpty": "Descanso",
		"shiftPlaceholder": "(Haz clic para seleccionar turno)",
		"shiftErrorNotEmpty": "¡El turno para días laborables no puede estar vacío!",
		"workPlace": "Lugar de trabajo",
		"workPlacePlaceholder": "Selecciona el lugar de trabajo",
		"workPlaceErrorNotEmpty": "¡El lugar de trabajo no puede estar vacío!",
		"fieldWork": "Registro de trabajo en campo",
		"allowFieldWork": "¿Permitir registro de trabajo en campo?",
		"requiredFieldWorkRemarks": "¿Se requiere observaciones en el registro de trabajo en campo?",
		"fieldWorkMarkError": "¿Tratar el registro de trabajo en campo como datos anómalos?",
		"requiredCheckInDate": "Fechas de registro obligatorio",
		"requiredCheckInDateThDate": "Fecha",
		"requiredCheckInDateThShift": "Turno",
		"requiredCheckInDateThCycle": "Ciclo",
		"requiredCheckInDatePlaceholder": "Agrega las fechas de registro obligatorio",
		"noNeedCheckInDate": "Fechas sin registro",
		"noNeedCheckInDatePlaceholder": "Agrega las fechas sin registro",
		"confirmDelete": "¿Estás seguro de que deseas eliminar este grupo de asistencia 【{name}】?"
	},
	"scheduleForm": {
		"title": "Programación",
		"shift": "Turnos programados",
		"cycle": "Ciclo de programación",
		"restShift": "Descanso",
		"clear": "Eliminar",
		"cycleBtnLabel": "Programar de acuerdo con el ciclo de programación",
		"section": "Día",
		"day": "Días",
		"monthInfo": "¡¡ cambiar mes guardará automáticamente los datos del mes actual!",
		"copyFromLastMonthBtn": "Copiar los datos de programación del mes pasado",
		"copyConfirmInfo": "¿¿ estás seguro de que quieres copiar los datos de {month} a la actualidad?",
		"downloadExcelTempEmptyShift": "¡¡ por favor, elija el horario primero!",
		"downloadExcelTempBtn": "Descargar la plantilla de Microsoft para programar",
		"uploadExcelBtn": "Sube el Microsoft que ya está programado",
		"excelEmptyShift": "--Descanso--",
		"excelTitle": "{month} Horario (solo se puede programar de acuerdo con el turno desplegable existente, de lo contrario no se puede identificar)",
		"excelFileName": "{month}_Horario.xlsx"
	},
	"dateCycle": {
		"none": "Ninguno",
		"week": "Semanal",
		"twoWeek": "Cada dos semanas",
		"month": "Mensual"
	},
	"detailManagerTitle": "Estadísticas de asistencia",
	"detailTable": {
		"filterSelectTitle": "Seleccionar persona",
		"filterEmptyPlaceholder": "¡Seleccione la persona a consultar!",
		"person": "Nombre",
		"groupName": "Grupo de asistencia",
		"shiftName": "Turno",
		"date": "Fecha",
		"attendance": "Días de asistencia",
		"rest": "Días de descanso",
		"leave": "Días de permiso",
		"absenteeismDays": "Días de ausencia",
		"workTimeDuration": "Duración del tiempo de trabajo",
		"averageWorkTimeDuration": "Duración promedio del tiempo de trabajo",
		"lateTimes": "Veces de llegada tarde",
		"lateTimeDuration": "Duración de llegada tarde (minutos)",
		"leaveEarlierTimes": "Veces de salida temprana",
		"leaveEarlierTimeDuration": "Duración de salida temprana (minutos)",
		"onDutyAbsenceTimes": "Veces de falta de registro de entrada",
		"offDutyAbsenceTimes": "Veces de falta de registro de salida",
		"absenceTimes": "Veces de falta de registro",
		"fieldWorkTimes": "Veces de trabajo externo",
		"btnRecordList": "Registro de asistencia"
	},
	"detailExportExcelFileSuccess": "¡Los datos se han calculado correctamente! ¡Haz clic en Aceptar para descargar el archivo Excel!",
	"detailExportConfirmMsg": "¡La exportación puede llevar tiempo! ¡Por favor, espera un momento!",
	"detailStatisticList": {
		"filterEmptyPlaceholder": "¡Seleccione la persona o la organización para consultar!",
		"filterSelectTitle": "Seleccionar persona u organización para consultar",
		"participatesPlaceholder": "Haz clic para seleccionar personas u organizaciones para la asistencia",
		"participatesErrorNotEmtpy": "¡Las personas u organizaciones para la asistencia no pueden estar vacías!",
		"startDateEmptyPlaceholder": "¡Seleccione la fecha de inicio!",
		"endDateEmptyPlaceholder": "¡Seleccione la fecha de finalización!",
		"endDateCannotSmaller": "La fecha de finalización no puede ser inferior a la fecha de inicio!",
		"startDateAndEndDateMoreThan": "El intervalo de fechas no puede exceder los 31 días!"
	},
	"detailRecordList": {
		"title": "Registro de asistencia",
		"dutyTitle": "Tipo de asistencia",
		"time": "Hora de asistencia",
		"result": "Resultado de asistencia",
		"address": "Dirección de punzonado",
		"signDesc": "Instrucciones sobre el terreno"
	},
	"configManagerTitle": "Configuración de asistencia",
	"config": {
		"holidays": "Días festivos",
		"holidayLabels": "Configurar días festivos. Agregue aquí las fechas que normalmente son días laborables pero se consideran días festivos.",
		"workdays": "Días laborables",
		"workdayLabels": "Configurar días laborables. Agregue aquí las fechas que normalmente son días no laborables pero se consideran días laborables.",
		"appealConfig": "Configuración de solicitud de registro",
		"appealEnableLabel": "Habilitar función de solicitud de registro",
		"appealProcessTypeInnerLabel": "Proceso interno predefinido",
		"appealProcessTypeProcessLabel": "Proceso personalizado",
		"appealProcessTypeProcessPlaceholder": "Seleccione proceso personalizado",
		"appealMaxTimesLabel": "Máximo de solicitudes mensuales por usuario",
		"appealMaxTimesError": "Ingrese un número válido de solicitudes",
		"fastCheckIn": "Registro rápido",
		"onDutyFastCheckInEnable": "Habilitar registro rápido al entrar (válido en la aplicación)",
		"offDutyFastCheckInEnable": "Habilitar registro rápido al salir (válido en la aplicación)",
		"checkInAlert": "Recordatorio de registro",
		"checkInAlertEnable": "Habilitar recordatorio de registro (recibirá notificaciones antes de entrar y después de salir para recordarle que haga el registro)",
		"exceptionAlertEnable": "Habilitar alerta de registro de excepciones",
		"exceptionAlertEnableTime1": " (Recibirá el mensaje de registro de excepción a las ",
		"exceptionAlertEnableTime2": " del día siguiente)",
		"detailStatisticCron": "Cronómetro estadístico",
		"closeOldAttendance": "Asistencia antigua",
		"closeOldAttendanceLabel": "¿ apagar la versión anterior de la función de punzonado de asistencia (para evitar errores en los puntos finales de la aplicación)"
	},
	"leaveManagerTitle": "Registro de ausencias y permisos",
	"leave": {
		"personName": "Nombre de la persona",
		"leaveType": "Tipo",
		"startTime": "Hora de inicio",
		"endTime": "Hora de finalización",
		"leaveDays": "Días",
		"desc": "Descripción",
		"excelTemplate": "Descargar plantilla de Excel",
		"importExcel": "Importar Excel",
		"importExcelFileError": "¡Solo se pueden importar archivos de Excel!",
		"importExcelFileSuccess": "Importación completada. ¡Haga clic en Aceptar para descargar y ver los resultados de la importación!",
		"deleteConfirm": "¿Está seguro de que desea eliminar estos datos de registro?"
	},
	"appealManagerTitle": "Datos de excepciones de asistencia",
	"appeal": {
		"date": "Fecha",
		"dutyType": "Tipo de registro",
		"recordTime": "Hora de registro",
		"recordResult": "Resultado del registro",
		"status": "Estado",
		"normal": "Normal",
		"absenteeism": "Falta o retraso injustificado",
		"early": "Salida temprana",
		"late": "Retraso",
		"seriousLate": "Retraso grave",
		"notSigned": "Sin registro",
		"appeal": "Solicitud de apelación",
		"fieldWork": "Registro de trabajo de campo",
		"leave": "Pedir permiso",
		"status0": "Pendiente de procesar",
		"status1": "En proceso",
		"status2": "Aprobado",
		"status3": "Rechazado",
		"status4": "Procesado",
		"startProcess": "Iniciar apelación",
		"openJob": "Ver apelación",
		"startProcessNoConfigError": "No se ha configurado el proceso de apelación. ¡No se puede iniciar el proceso!",
		"notfoundJobError": "No se encontraron datos de proceso correspondientes. ¿Desea restaurar el estado actual de los datos?",
		"dealAppeal": "Tratamiento",
		"confirmDealAppeal": "¿¿ confirmar que quiere establecer este dato a normal?"
	},
	"recordManagerTitle": "Registro original",
	"record": {
		"detailTitle": "registrar detalles",
		"name": "Nombre",
		"group": "Grupo de asistencia",
		"shift": "Turno",
		"dutyTime": "Hora de asistencia",
		"checkInType": "Tipo de asistencia",
		"recordDate": "Fecha de registro",
		"sourceType": "Origen de datos",
		"fieldWorkDesc": "instrucciones de campo",
		"fieldWorkAddress": "Dirección de perforación",
		"checkInResult": "Resultado del registro",
		"fieldWork": "¿Registro de trabajo de campo?",
		"sourceTypeUser": "Registro del usuario",
		"sourceTypeAuto": "Generado por el sistema",
		"sourceTypeFast": "Registro rápido",
		"sourceTypeImport": "Importación de datos",
		"importExcelFileSuccess": "Importación completada, hay {number} registros con errores. ¡Haz clic en Aceptar para descargar y ver los resultados de la importación!",
		"searchDateError": "¡¡ las fechas de inicio y fin deben estar vacías o valer la pena!"
	},
	"mobile": {
		"menu": {
			"checkIn": "Registro",
			"statistic": "Estadísticas",
			"settings": "Configuración"
		},
		"unCheckIn": "Sin registro",
		"refreshLocation": "[Actualizar ubicación]",
		"locationIng": "Obteniendo ubicación...",
		"locationError": "Error al obtener la ubicación. ¡Habilita los permisos de ubicación!",
		"checkInWithTime": "Registro realizado a las {time}",
		"updateCheckInBtn": "Actualizar registro",
		"outsideTitle": "Registro de trabajo de campo",
		"outsideNotAllow": "No se permite el registro de trabajo de campo.",
		"outsideRemarkPlaceholder": "Ingresa una descripción para el registro de trabajo de campo.",
		"statisticMonthLabel": "Mes"
	}
}
MWF.xApplication.attendancev2["lp."+o2.language] = MWF.xApplication.attendancev2.LP