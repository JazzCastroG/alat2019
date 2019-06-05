var WebApp  = angular.module('WebApp', ['ngSanitize']).controller('translate', function($scope){
	
  $scope.Esp = { 
		//MENU titles
		menu001: 'Bienvenida',
		menu002:'Directiva',
		menu003:'Directores',
		menu004:'Programa',
		menu005:'Registro',
		menu006:'Hospedaje',
		menu007:'Sede',
		menu008:'Tour',
		menu009:'Expo',
		menu010:'Contacto',
		
		//HOME
		home01:'Julio 2019',
		home02:'3-6 Julio, 2019',
		home03:'Centro de Convenciones ATLAPA, Panamá',
    
    //Welcome Letter
    wel01: 'Estimados colegas y amigos, sean todos bienvenidos al <em>12 Congreso de la Asociación Latinoamericana de Torax, ALAT Panama 2019</em>, actividad de la medicina respiratoria que reúne a médicos y personal de la salud respiratoria de toda Latinoamérica, hemos preparado para ustedes un programa académico de alto nivel científico dividido en conferencias magistrales y simposios de cada una de las áreas de la medicina respiratoria con un grupo de profesores de alto nivel científico y la colaboración de sociedades hermanas.',
    wel02: 'Por primera vez en su historia esta gran actividad científica se realiza en la región centroamericana siendo elegida la ciudad de Panamá su anfitriona y será el marco también del Congreso de la Federación Centroamericana de Neumología y Cirugía del Tórax y la Conferencia Regional de la Unión Internacional contra la Tuberculosis  y Enfermedades Respiratorias.',
    wel03: 'Es un grato placer para mi darles la bienvenida a Ciudad Panamá, una ciudad cosmopolita, donde encontrará actividades de entretenimiento para todos los gustos con una oferta gastronómica muy variada, el mayor y mejor centro de compras de Latinoamérica y la única vía interoceánica del continente, el Canal de Panamá, que es una maravilla de la arquitectura moderna.',
    wel04: 'Si lo suyo es la naturaleza, a menos de una hora de ciudad de Panamá, podrá disfrutar de playas tanto del Pacífico como del Caribe, así como zonas de montañas.',
    wel05: 'Hemos preparado las facilidades para que nuestros visitantes puedan, además de aprovechar la rica oferta académica del congreso, llevarse a casa gratos recuerdos de nuestro país.',
    wel06: 'Le esperamos en ',
    wel07: 'Presidenta del Congreso ALAT2019',
    wel08: 'Estimados colegas,',
    wel09: 'Como presidente de la ALAT es un gusto y orgullo <b>invitarlos al 12° Congreso de la Asociación Latinoamericana de Tórax</b> a realizarse en <b>Panamá del 3 al 6 de julio del 2019</b>. Este congreso constituye el mayor evento internacional de medicina respiratoria en Latinoamérica, que por primera vez será con una periodicidad anual y se desarrollará en español y portugués, características que lo hacen muy atractivo no solo para los asistentes que pueden acceder a las ponencias y tener una participación en su lengua nativa, sino que también a los ponentes y expositores ya que se logrará interacción mas amplia y dinámica.',
    wel010: 'Además, será la <b>primera vez que la ALAT se acerque efectivamente a sus miembros de Centroamérica</b>, con esta visión elegimos a la ciudad de Panamá, centro geográfico, comercial y de comunicaciones de la región, además de las variadas atracciones turísticas que ofrece. Así mismo, firmamos un acuerdo de cooperación para el desarrollo de este Congreso con la Federación Centroamericana y del Caribe de Neumología y Cirugía del Tórax (FCCNCT) y con la Unión Internacional contra la Tuberculosis y Enfermedades Respiratorias (UNION); que reforzará la presencia de las sociedades hermanas del resto del mundo que nos acompañan en cada edición y que entienden de la importancia de nuestro congreso en el continente de manera que ya han confirmado su participación oficial ERS, ATS, CHEST,  APRS, SEPAR, SPP y Neumosur.',
    wel011: 'Nos honran como Presidente de la organización la Dra. Lorena Noriega, destacada y reconocida panameña y activo miembro de ALAT y en la Secretaría del Comité Científico el Dr. Mark Cohen Todd, Presidente de la FCCNCT y Vicepresidente de ALAT, a quienes se le suman destacados profesionales regionales e internacionales que nos aseguran un evento sobresaliente.',
    wel012: 'La <b>sede del evento será el centro de convenciones ATLAPA</b>, el mismo que quedó en la historia por VII Cumbre de las Américas con el encuentro de Castro y Obama, que cuenta con amplios espacios y facilidades para el desarrollo de un congreso que satisfaga las expectativas de los asistentes. Frente al mismo se encuentran los hoteles Sheraton y ALOFT, designados como los oficiales para ALAT 2019.',
    wel013: 'Para el programa científico, junto a los departamentos científicos y las sociedades pares (FCCNCT y UNION) pondremos el foco en las patologías de mayor impacto para la salud de la población y además como enfrentarlas desde una mirada amplia y estratégica con el fin de acercarnos a las necesidades de los pacientes, objeto y fin ultimo de nuestro trabajo.',
    wel014: 'Sin duda, el 12° Congreso de la Asociación Latinoamericana de Tórax <b>marcará un hito en la medicina respiratoria regional</b> y es por ello que lo invitamos a participar del mismo.',
    wel015: 'Sin mas, les dejo un afectuoso saludo con la expectativa de verlos en Panamá 2019 para compartir conocimientos y experiencias por el bien de la población de nuestra querida Latinoamérica.',
    wel016: 'Presidente de ALAT',
    
		//CONSEJO DIRECTIVO
		consejoHeader:'CONSEJO DIRECTIVO',
		consejoCD01:'Presidente ALAT 2018-2020',
		consejoCD02:'Secretario ALAT 2018-2020',
		consejoCD03:'Tesorero ALAT 2018-2020',
		consejoCD04:'Vicepresidente ALAT 2018-2020',
		consejoCD05:'Presidenta del Congreso ALAT 2019',
		
		//DIRECTORES DE DEPARTAMENTOS
		directoresHeader:'DIRECTORES DE DEPARTAMENTOS',
		directoresC01:'Asma',
		directoresC02:'Circulación Pulmonar',
		directoresC03:'Cirugía Torácica',
		directoresC04:'Cuidado Respiratorio',
		directoresC05:'Endoscopia',
		directoresC06:'Enfermedades Infecciosas',
		directoresC07:'Enfermedades Intersticiales',
		directoresC08:'EPOC',
		directoresC09:'Fisiopatología',
		directoresC10:'Imágenes',
		directoresC11:'Medicina Crítica',
		directoresC12:'Oncología',
		directoresC13:'Pediatría',
		directoresC14:'Sueño',
		directoresC15:'Tabaquismo',
		directoresC16:'Tuberculosis',
		directoresC17:'Fisiopatologia',
		directoresC18:'Cirugía',
		directoresC19:'Imágenes',
		
		//PROGRAMA
		programaHeader:'PROGRAMA CIENTÍFICO PRE-CONGRESO PRELIMINAR',
		d001:'DÍA 1',
		f001:'MIÉRCOLES 3 DE JULIO DE 2019',
		d002:'DÍA 2',
		f002:'JUEVES 4 DE JULIO DE 2019',
		d003:'DÍA 3',
		f003:'VIERNES 5 DE JULIO DE 2019',
		d004:'DÍA 4',
		f004:'SÁBADO 6 DE JULIO DE 2019',
    
    //Registration
    reg01: 'Miembros ALAT',
    reg02: 'Desde 15 de septiembre de 2018 al 15 de mayo de 2019',
    reg03: 'Desde 16 de mayo  de 2019 a sitio',
    reg04: 'Taifa vigente hasta el Congreso',
    reg05: 'Regístrate',
    reg06: 'No miembros ALAT',
    reg07: 'Desde 15 de septiembre de 2018 al 15 de mayo de 2019',
    reg08: 'Desde 16 de mayo  de 2019 a sitio',
    reg09: 'Taifa vigente hasta el Congreso',
    reg010: 'Profesionales no médicos y técnicos',
    reg011: 'Desde 15 de septiembre de 2018 al 15 de mayo de 2019',
    reg012: 'Desde 16 de mayo  de 2019 a sitio',
    reg013: 'Taifa vigente hasta el Congreso',
    reg014: 'Estudiantes residentes nivel licenciatura y posgrado',
    reg015: 'Desde 15 de septiembre de 2018 al 15 de mayo de 2019',
    reg016: 'Desde 16 de mayo  de 2019 a sitio',
    reg017: 'Taifa vigente hasta el Congreso',
    
    //Abstracts
    abs01: 'TRABAJOS CIENTÍFICOS',
    abs02: 'Haz clic aquí para registrar tu Trabajo Científico',
		
		//HOSPEDAJE
		headerHospedaje: 'HOSPEDAJE',
		subHospedaje: '- Hotel sede -',
		
		textoH011: 'diarias a partir de',
		incluye001: 'Incluye desayuno, impuestos y propinas',
		
		textoH021: 'diarias a partir de',
		incluye002: 'Incluye desayuno, impuestos y propinas',
		
		botonRESERVAR: 'Reservar',
		leyendaBoton:'Transacción sujeta a fluctuación cambiaria (peso mexicano)',
		
		//SEDE
		headerSede: 'SEDE',
		
		autoridadT: 'Autoridad de turismo',
		
		monedaH:'MONEDA',
		monedaT:'Dólar americano',
		electricidadH:'ELECTRICIDAD',
		electricidadT:'110 voltios; 60 ciclos.',
		turismoH:'TURISMO',
		turismoT:'Cada año más de un millón de personas visitan el Canal de Panamá y presencian esta maravilla de la ingeniería.',
		comercioH:'COMERCIOS',
		comercioT:'Generalmente abren desde las 9:00 am y cierran a las 6:00 pm, de lunes a sábado. Algunos comercios abren también los domingos.',
		propinasH:'PROPINAS',
		propinasT:'Se recomienda del 10% al 15% de la cuenta total.',
		horarioH:'HORARIO',
		horarioT:'El horario de Panamá es siempre igual a la hora oficial del Este (GMT- 5)',
		licenciaH:'LICENCIA DE CONDUCIR',
		licenciaT:'Los visitantes pueden manejar hasta 90 días con licencia de conducir extranjera.',
		idiomaH:'IDIOMA',
		idiomaT:'El idioma oficial es el Español, sin embargo muchos Panameños hablan inglés.',
		panamaH:'PANAMÁ',
		panamaT: 'Es mundialmente reconocido por sus 48 millas de canal que unen el océano Pacífico con el océano Atlántico.',
		vestimentaH:'VESTIMENTA',
		vestimentaT:'Para actividades al aire libre, se recomiendan prendas de vestir livianas, protector solar, repelentes de mosquitos (si piensa visitar zonas montañosas).',
		restauranteH:'HOTELES & RESTAURANTES',
		restauranteT:'En la ciudad de Panamá podrás disfrutar de restaurantes de calidad, excitante vida nocturna y casinos.',
		climaH:'CLIMA',
		climaT:'Tropical, la temperatura promedio es de 27°C al aire libre con humedad mayor de 75%. En lugares cerrados suele haber aire acondicionado con temperaturas entre los 15 y 22 °C.',
		saludH:'SALUD',
		saludT:'Se recomienda contar con un seguro contra accidentes, los hospitales privados suelen ser costosos y sólo un hospital del ministerio de salud atiende turistas. Debe contar con vacuna contra la fiebre amarilla si nos visita de lugares con dicha infección (en Panamá no hay fiebre amarilla).',
		
		sub01Sede: 'RECINTO',
		sub02Sede: 'CENTRO DE CONVENCIONES ATLAPA',
		p01Sede: 'es uno de los más espectaculares y completos centros de Convenciones del mundo, los invita a la encrucijada del Continente Americano, Panamá.',
		p02Sede: 'donde se combina la herencia artística y cultural de un pueblo, con la tecnología de éste siglo, es un imponente Centro de Convenciones con múltiples servicios.',
		
				//TOUR
		headerTour: 'TOUR',
		botonTour: 'MÁS INFORMACIÓN',
		
		//CONTACTO
		headerContacto: 'CONTACTO',
		subHeaderC01: 'INFORMACIÓN GENERAL CONGRESO ALAT 2019',
		subHeaderC02: 'COMERCIALIZACIÓN CONGRESO ALAT 2019',
		subHeaderC03: 'HOSPEDAJE CONGRESO ALAT 2019',
		subHeaderC04: 'HELPDESK',
		ddc: ' Design and Development by'
  }
  
  $scope.Por = { 
		//MENU titles
		menu001:'BOAS-VINDAS',
		menu002:'DIRETORIA',
		menu003:'DIRETORES',
		menu004:'PROGRAMA',
		menu005:'REGISTROS',
		menu006:'HOSPEDAGEM',
		menu007:'Sede',
		menu008:'Tour',
		menu009:'Expo',
		menu010:'CONTATO',
		menu011:'ESP',
		menu012:'POR',
		
		//HOME
		home01:'Julho 2019',
		home02:'3-6 de julho de 2019',
		home03:'Centro de Convenções ATLAPA, Panamá',
    
    //Welcome Letter
    wel01: 'Caros colegas e amigos, Sejam todos bem-vindos ao <em>12º Congresso da Associação Latino-Americana do Tórax, ALAT Panamá 2019</em>, atividade da medicina respiratória que reúne médicos e profissionais da saúde respiratória de toda a América Latina;. Nós preparamos para você um programa acadêmico de alto nível científico dividido em palestras e simpósios de cada uma das áreas da medicina respiratória com um grupo de professores de alto nível científico e a colaboração de sociedades irmãs.',
    wel02: 'Pela primeira vez em sua história, esta grande atividade científica terá lugar na região centro-americana, sendo a Cidade do Panamá escolhida como anfitriã e também será a sede do Congresso da Federação Centro-Americana de Pneumologia e Cirurgia Torácica e da Conferência Regional da União Internacional contra Tuberculose e Doenças Respiratórias.',
    wel03: 'É para mim um prazer recebê-los na Cidade do Panamá, uma cidade cosmopolita onde você encontrará atividades de entretenimento para todos os gostos, com uma oferta gastronômica diversa, o maior e melhor shopping da América Latina e a única rota interoceânica do continente: o Canal do Panamá, que é uma maravilha da arquitetura moderna.',
    wel04: 'Se é da natureza que você gosta, a menos de uma hora da Cidade do Panamá, você pode desfrutar de praias do Pacífico e do Caribe, bem como áreas montanhosas.',
    wel05: 'Preparamos as instalações para que nossos visitantes possam, além de aproveitar a rica oferta acadêmica do congresso, levar para casa lembranças agradáveis do nosso país.',
    wel06: 'Estamos esperando por você em ',
    wel07: 'Presidenta do Congresso ALAT2019',
    wel08: 'Prezados colegas,',
    wel09: 'Como presidenta da ALAT, é um prazer e um orgulho <em>convidá-los para o 12º Congresso da Associação Latino-Americana de Tórax, a ser realizado no Panamá, de 3 a 6 de julho de 2019.</em> Este congresso representa o maior evento internacional de medicina respiratória da América Latina, que será realizado anualmente pela primeira vez, e será em espanhol e português, características que o tornam muito atraente não só para os participantes que podem ter acesso às palestras participar na sua língua nativa, mas também para os palestrantes e apresentadores, pois a interação poderá ser mais ampla e dinâmica.',
    wel010: 'Além disso, será a <em>primeira vez que a ALAT se aproxime, realmente, de seus membros da América Central</em>; foi com essa visão que nós escolhemos a Cidade do Panamá, centro geográfico, comercial e de comunicações da região, além das diversas atrações turísticas que oferece. Além disso, assinamos um acordo de cooperação para desenvolver este congresso com a Federação Centro-Americana e do Caribe de Pneumologia e Cirurgia Torácica (FCCNCT) e com a União Internacional contra Tuberculose e Doenças Respiratórias (UNION), reforçando a presença das sociedades irmãs do resto do mundo que nos acompanham em cada edição e que entendem a importância do nosso congresso no continente. Portanto, temos confirmação da participação oficial de ERS, ATS, CHEST, APRS, SEPAR, SPP e Neumosur.',
    wel011: 'É uma honra ter a presença da presidenta da organização, a Dra. Lorena Noriega, panamenha proeminente e reconhecida e membro ativo da ALAT e no Secretariado do Comitê Científico, Dr. Mark Cohen Todd, Presidente da FCCNCT e Vice-Presidente da ALAT, aos quais se juntam destacados profissionais regionais e internacionais que nos garantem um evento destacado.',
    wel012: 'A <em>sede do evento será o Centro de Convenções ATLAPA</em>, o mesmo que entrou para a história na VII Cúpula das Américas com o encontro entre Castro e Obama, o qual conta com amplos espaços e instalações para o desenvolvimento de um congresso que satisfaça os expectativas dos participantes. Em frente estão os hotéis Sheraton e ALOFT, designados como os hotéis oficiais do ALAT 2019.',
    wel013: 'Para o programa científico, em conjunto com os departamentos científicos e as associações parceiras (FCCNCT e UNION), iremos nos focar nas patologias com maior impacto na saúde da população e também como lidar com elas de uma perspectiva ampla e estratégica, a fim de nos aproximarmos das necessidades dos pacientes, objeto e propóstito final do nosso trabalho.',
    wel014: 'Não há dúvida que o 12º Congresso da Associação Latino-Americana do Tórax <em>será um marco na medicina respiratória regional</em> e é por isso que queremos convidá-lo a participar.',
    wel015: 'Sem mais, deixo minhas saudações afetuosas esperando ver você no Panamá 2019 para compartilhar conhecimentos e experiências para benefício da população da nossa amada América Latina.',
    wel016: 'Presidente da ALAT',
		
		//CONSEJO DIRECTIVO
		consejoHeader:'CONSELHO DIRETIVO',
		consejoCD01:'Presidente da ALAT 2018-2020',
		consejoCD02:'Secretário da ALAT 2018-2020',
		consejoCD03:'Tesoureiro da ALAT 2018-2020',
		consejoCD04:'Vice-Presidente da ALAT 2018-2020',
		consejoCD05:'Presidente do Congresso ALAT 2019',
		
		//DIRECTORES DE DEPARTAMENTOS
		directoresHeader:'DIRETORES DE DEPARTAMENTOS',
		directoresC01:'Asma',
		directoresC02:'Circulação Pulmonar',
		directoresC03:'Cirurgia Torácica',
		directoresC04:'Cuidados Respiratórios',
		directoresC05:'Endoscopia',
		directoresC06:'Doenças Infecciosas',
		directoresC07:'Doenças Intersticiais',
		directoresC08:'DPOC',
		directoresC09:'Fisiopatologia',
		directoresC10:'Imagens',
		directoresC11:'Medicina Crítica',
		directoresC12:'Oncologia',
		directoresC13:'Pediatria',
		directoresC14:'Sono',
		directoresC15:'Tabagismo',
		directoresC16:'Tuberculose',
		directoresC17:'Fisiopatologia',
		directoresC18:'Cirugía',
		directoresC19:'Imágenes',
		
		//PROGRAMA
		programaHeader:'PROGRAMA CIENTÍFICO PRELIMINAR PRÉ-CONGRESSO',
		d001:'DIA 1',
		f001:'QUARTA-FEIRA, 3 DE JULHO DE 2019',
		d002:'DIA 2',
		f002:'QUINTA-FEIRA, 4 DE JULHO DE 2019',
		d003:'DIA 3',
		f003:'SEXTA-FEIRA, 5 DE JULHO DE 2019',
		d004:'DIA 4',
		f004:'SÁBADO 6 DE JULHO DE 2019',
    
    //Registration
    reg01: 'Membros ALAT',
    reg02: 'De 15 de setembro de 2018 a 15 de mayo de 2019 ',
    reg03: 'De 1º de maio de 2019 até o encontro',
    reg04: 'Taxa em vigor a partir de 15 de mayo de 2019',
    reg05: 'Regístrate',
    reg06: 'Não-membros ALAT',
    reg07: 'De 15 de setembro de 2018 a 15 de mayo de 2019',
    reg08: 'De 1º de maio de 2019 até o encontro',
    reg09: 'Taxa em vigor a partir de 15 de mayo de 2019',
    reg010: 'Profissionais não-médicos e técnicos',
    reg011: 'De 15 de setembro de 2018 a 15 de mayo de 2019',
    reg012: 'De 1º de maio de 2019 até o encontro',
    reg013: 'Taxa em vigor a partir de 15 de mayo de 2019',
    reg014: 'Estudantes residentes de graduação e pós-graduação',
    reg015: 'De 15 de setembro de 2018 a 15 de mayo de 2019',
    reg016: 'De 1º de maio de 2019 até o encontro',
    reg017: 'Taxa em vigor a partir de 15 de mayo de 2019',
    
    //Abstracts
    abs01: 'TRABALHOS CIENTÍFICOS',
    abs02: 'Clique aqui para inscrever seu trabalho científico',
		
		//HOSPEDAJE
		headerHospedaje: 'HOSPEDAGEM',
		subHospedaje: '- Hotel Sede -',
		
		textoH011: 'diárias a partir de',
		incluye001: 'Inclui café da manhã, impostos e gorjetas',
		
		textoH021: 'diárias a partir de',
		incluye002: 'Inclui café da manhã, impostos e gorjetas',
		
		botonRESERVAR: 'Reservar',
		leyendaBoton:'Transação sujeita à flutuação do câmbio (reais)',
		
		//SEDE
		headerSede: 'SEDE',
		
		autoridadT: 'Autoridade de Turismo',
		
		monedaH:'MOEDA',
		monedaT:'Dólar americano',
		electricidadH:'ELETRICIDADE',
		electricidadT:'110 volts; 60 ciclos',
		turismoH:'TURISMO',
		turismoT:'A cada ano, mais de um milhão de pessoas visita o Canal do Panamá e testemunha essa maravilha da engenharia.',
		comercioH:'LOJAS',
		comercioT:'Normalmente abrem às 9 horas e fecham às 18 horas, de segunda a sábado. Algumas lojas também abrem aos domingos.',
		propinasH:'GORJETAS',
		propinasT:'A recomendação é 10% a 15% da conta total.',
		horarioH:'HORA',
		horarioT:'A hora do Panamá é sempre igual à hora oficial do leste dos EUA (GMT-5)',
		licenciaH:'CARTEIRA DE MOTORISTA',
		licenciaT:'Os visitantes podem dirigir até 90 dias com a carteira de motorista do seu país.',
		idiomaH:'LÍNGUA',
		idiomaT:'A língua oficial é o espanhol, porém muitos panamenhos falam inglês.',
		panamaH:'PANAMÁ',
		panamaT: 'É mundialmente famosa por seus 77 quilômetros de canal que ligam o Oceano Pacífico com o Oceano Atlântico.',
		vestimentaH:'VESTUÁRIO',
		vestimentaT:'Para atividades ao ar livre, a recomendação é usar roupas leves, protetor solar, repelente de mosquitos (em áreas montanhosas).',
		restauranteH:'HOTEL E RESTAURANTES',
		restauranteT:'Na Cidade do Panamá, você pode desfrutar de restaurantes de qualidade, vida noturna animada e cassinos.',
		climaH:'CLIMA',
		climaT:'Tropical, a temperatura média é de 27° C ao ar livre com umidade acima de 75%. Em locais fechados, geralmente tem ar condicionado com temperaturas de 15 a 22° C.',
		saludH:'SAÚDE',
		saludT:'Recomenda-se ter seguro de acidentes, os hospitais privados costumam ser onerosos e tem apenas um hospital do Ministério da Saúde que atende turistas. Você deve ter a vacina contra a febre amarela se está nos visitando de lugares com essa infecção (não há febre amarela no Panamá).',
		
		sub01Sede: 'SEDE',
		sub02Sede: 'CENTRO DE CONVENÇÕES ATLAPA',
		p01Sede: 'é um dos centros de convenções mais espetaculares e completos do mundo e convida você para a encruzilhada do Continente Americano, o Panamá.',
		p02Sede: ' onde o patrimônio artístico e cultural de um povo combina-se com a tecnologia deste século, é um imponente Centro de Convenções com múltiplos serviços.',
		
		//TOUR
		headerTour: 'TOUR',
		botonTour: 'SAIBA MAIS',
		
		//CONTACTO
		headerContacto: 'CONTATO',
		subHeaderC01: 'INFORMAÇÃO GERAL DO CONGRESSO ALAT 2019',
		subHeaderC02: 'COMERCIALIZAÇÃO NO CONGRESSO ALAT 2019',
		subHeaderC03: 'HOSPEDAGEM NO CONGRESSO ALAT 2019',
		subHeaderC04: 'CENTRO DE ATENDIMENTO',
		ddc: 'Design e Desenvolvimento por'
  }
  
  $scope.Lang = $scope.Esp
	
	$scope.TxtLang = function(lang){
		switch(lang){
			case 'Es':
				$scope.Lang = $scope.Esp;
				break
			case 'Pt':
				$scope.Lang = $scope.Por;
				break
			default:
				$scope.Lang = $scope.Esp;
				break
		}
	}
})

//angular.bootstrap(document, ['WebApp'])


    
