export interface Law {
  number: number
  title: string
  subtitle: string
  description: string
  category: 'reputation' | 'strategy' | 'deception' | 'relationships' | 'timing' | 'self-mastery'
  historicalExample: {
    title: string
    story: string
  }
  modernApplication: string
  reversal: string
}

export const laws: Law[] = [
  {
    number: 1,
    title: "Nunca le hagas sombra a tu amo",
    subtitle: "Haz siempre que los que están por encima de ti se sientan cómodamente superiores",
    description: "En tu deseo de agradar y de impresionar, no te pases de la raya y no dejes que tus talentos eclipsen a los de tu superior. Haz que se sienta más brillante de lo que es y alcanzarás las cimas del poder.",
    category: "relationships",
    historicalExample: {
      title: "Nicolas Fouquet y Luis XIV",
      story: "En 1661, Nicolas Fouquet, ministro de finanzas de Francia, organizó una fiesta espléndida en su castillo de Vaux-le-Vicomte para impresionar al joven rey Luis XIV. La magnificencia de la celebración superó todo lo que el rey había visto. Tres semanas después, Fouquet fue arrestado por orden del rey y pasó el resto de su vida en prisión. Su crimen: hacer sombra al Sol."
    },
    modernApplication: "En reuniones con tu manager, presenta tus ideas como extensiones de su visión. 'Basándome en lo que dijiste la semana pasada...' Dale crédito público y él se convertirá en tu mayor promotor para ascensos.",
    reversal: "Si tu superior es débil e inseguro, hacerle sombra puede destruirte. Pero si es fuerte y seguro, mostrar tus talentos puede ganarte su respeto y promoción."
  },
  {
    number: 2,
    title: "No confíes demasiado en tus amigos, aprende a usar a tus enemigos",
    subtitle: "Los amigos te traicionarán más rápido porque se sienten con derecho",
    description: "Ten cuidado con los amigos, ya que te traicionarán con mayor rapidez, pues son más propensos a la envidia. En cambio, contrata a un antiguo enemigo y te será más leal que un amigo.",
    category: "relationships",
    historicalExample: {
      title: "Miguel III y Basilio",
      story: "El emperador bizantino Miguel III elevó a su amigo Basilio de mozo de cuadra a co-emperador. Basilio, sintiéndose con derecho a más, eventualmente asesinó a Miguel y tomó el trono. La amistad creó expectativas que, al no cumplirse, generaron resentimiento mortal."
    },
    modernApplication: "Al formar equipos de proyecto, considera incluir a ese colega que te ha cuestionado públicamente. Tendrá más que demostrar y trabajará más duro para ganarse tu confianza que amigos que dan por sentada su posición.",
    reversal: "Los amigos genuinos y probados son invaluables. La clave es distinguir entre amigos verdaderos y aquellos que buscan beneficiarse de ti."
  },
  {
    number: 3,
    title: "Disimula tus intenciones",
    subtitle: "Mantén a la gente desequilibrada y en la oscuridad",
    description: "Nunca reveles el propósito de tus actos. Mantén a los demás en un estado de incertidumbre. Si no tienen idea de lo que quieres lograr, no podrán preparar una defensa.",
    category: "deception",
    historicalExample: {
      title: "Bismarck y la Guerra Franco-Prusiana",
      story: "Otto von Bismarck quería unificar Alemania, pero necesitaba que Francia declarara la guerra primero. Editó un telegrama para hacerlo parecer un insulto francés al rey prusiano. Francia, enfurecida, declaró la guerra. Bismarck obtuvo exactamente lo que quería mientras parecía la víctima."
    },
    modernApplication: "En negociaciones salariales o de contrato, nunca reveles tu urgencia ni tu cifra objetivo. Muestra interés en otros aspectos del paquete (días libres, formación) para ocultar tu verdadera prioridad y obtener mejores condiciones.",
    reversal: "Con aliados cercanos y en relaciones de confianza, la transparencia construye lazos más fuertes. Reserva el ocultamiento para situaciones competitivas."
  },
  {
    number: 4,
    title: "Di siempre menos de lo necesario",
    subtitle: "El poder de las palabras está en su escasez",
    description: "Cuanto más hables, más común parecerás y menos control tendrás. Personas poderosas impresionan e intimidan diciendo menos. Cuanto más digas, más probabilidades tendrás de decir algo tonto.",
    category: "self-mastery",
    historicalExample: {
      title: "Luis XIV, el Rey Sol",
      story: "Luis XIV era famoso por sus respuestas lacónicas. Cuando cortesanos elaboraban largos argumentos, él respondía simplemente 'Lo veré' o 'No'. Esta economía de palabras creaba un aura de poder impenetrable y hacía que cada palabra suya tuviera peso monumental."
    },
    modernApplication: "En reuniones con directivos, haz tu punto en menos de dos minutos y calla. Los ejecutivos respetan la concisión. El silencio posterior incomoda a otros y frecuentemente revela información valiosa sobre sus verdaderas preocupaciones.",
    reversal: "En situaciones donde necesitas inspirar o enseñar, la brevedad puede parecer frialdad. Adapta tu comunicación al contexto y la audiencia."
  },
  {
    number: 5,
    title: "Casi todo depende de tu prestigio, defiéndelo a muerte",
    subtitle: "Tu reputación es la piedra angular del poder",
    description: "La reputación es la piedra angular del poder. Solo con tu reputación puedes intimidar y ganar. Una vez que se debilita, serás vulnerable y atacado por todos lados. Haz tu reputación invulnerable.",
    category: "reputation",
    historicalExample: {
      title: "La reputación de Chuko Liang",
      story: "El estratega chino Chuko Liang defendió una ciudad con solo 100 soldados contra 150,000 enemigos. Abrió las puertas y se sentó a tocar el laúd en las murallas. El general enemigo, conociendo la reputación de Liang como maestro de emboscadas, asumió una trampa y se retiró. La reputación ganó sin una batalla."
    },
    modernApplication: "Construye tu marca personal en LinkedIn y en tu industria. Sé conocido por una cualidad distintiva: 'el que siempre cumple plazos' o 'la experta en datos'. Esta reputación te precederá en entrevistas y te abrirá puertas a oportunidades.",
    reversal: "Una reputación demasiado intimidante puede aislarte. Balancea tu imagen con accesibilidad selectiva."
  },
  {
    number: 6,
    title: "Llama la atención a cualquier precio",
    subtitle: "Todo se juzga por su apariencia; lo invisible no cuenta",
    description: "Destácate de la multitud. Sé llamativo, misterioso, incluso escandaloso. Atraer la atención te otorga poder. Es mejor ser difamado que ignorado.",
    category: "reputation",
    historicalExample: {
      title: "P.T. Barnum",
      story: "Barnum entendió que cualquier publicidad era buena publicidad. Cuando lo acusaron de fraude por su 'sirena de Fiji', no se defendió: amplificó la controversia. Las multitudes llegaban para ver si era real o falso. La polémica multiplicó su audiencia."
    },
    modernApplication: "En un mercado laboral saturado, la diferenciación es supervivencia. Desarrolla un enfoque distintivo a tu trabajo, comparte tus ideas en conferencias o podcasts. La visibilidad profesional te posiciona para roles de liderazgo.",
    reversal: "La atención excesiva puede generar escrutinio peligroso. Una vez establecido, puedes beneficiarte de períodos de bajo perfil estratégico."
  },
  {
    number: 7,
    title: "Haz que otros trabajen por ti, pero llévate siempre el crédito",
    subtitle: "Usa la sabiduría y el trabajo de los demás para promover tu causa",
    description: "Usa la sabiduría, el conocimiento y el trabajo de otros para promover tu propia causa. No solo te ahorrará tiempo y energía, sino que te dará un aura de eficiencia y rapidez.",
    category: "strategy",
    historicalExample: {
      title: "Thomas Edison",
      story: "Edison no inventó la bombilla solo; tenía un equipo de brillantes ingenieros. Pero fue Edison quien presentaba los inventos, daba las conferencias de prensa y recibía las patentes. Construyó un imperio sobre el trabajo colectivo presentado como genio individual."
    },
    modernApplication: "Como líder de proyecto, aprende a delegar y coordinar. En presentaciones a dirección, sé tú quien presente los resultados del equipo. Reconoce a tu equipo en privado con bonos y promociones; el crédito público es tu moneda de ascenso.",
    reversal: "Robar crédito demasiado descaradamente destruye la moral del equipo y tu reputación. Aprende el arte del reconocimiento estratégico."
  },
  {
    number: 8,
    title: "Haz que la gente vaya hacia ti, usa carnada si es necesario",
    subtitle: "Cuando fuerces a otros a actuar, tú controlas",
    description: "Cuando obligas a otros a actuar, eres tú quien controla. Es mejor hacer que tu oponente venga a ti, abandonando sus propios planes. Atráelo con ganancias fabulosas, luego ataca.",
    category: "strategy",
    historicalExample: {
      title: "Napoleón en Austerlitz",
      story: "Antes de Austerlitz, Napoleón fingió debilidad, retirándose y mostrando indecisión. Los rusos y austríacos, oliendo sangre, abandonaron posiciones ventajosas para atacar. Napoleón los esperaba exactamente donde quería. La trampa se cerró perfectamente."
    },
    modernApplication: "Cuando busques empleo, no persigas desesperadamente. Construye una presencia profesional que haga que reclutadores te contacten. En ventas, crea contenido valioso que atraiga clientes. Quien persigue negocia desde la debilidad.",
    reversal: "A veces la agresión directa y la velocidad son necesarias. No esperes eternamente cuando la oportunidad requiere acción inmediata."
  },
  {
    number: 9,
    title: "Gana a través de acciones, nunca por argumentos",
    subtitle: "Las victorias verbales son vacías",
    description: "Cualquier triunfo momentáneo que hayas logrado mediante argumentos será una victoria pírrica. El resentimiento durará mucho más. Es más poderoso hacer que otros estén de acuerdo contigo mediante tus acciones.",
    category: "strategy",
    historicalExample: {
      title: "Miguel Ángel y el David",
      story: "Cuando el político Soderini criticó la nariz del David como demasiado grande, Miguel Ángel subió al andamio con un puñado de polvo de mármol. Fingió esculpir mientras dejaba caer el polvo. Bajó y Soderini exclamó: '¡Ahora sí le has dado vida!' La nariz nunca cambió."
    },
    modernApplication: "En lugar de debatir en reuniones por qué tu propuesta funcionará, implementa una prueba piloto. Los datos de un MVP convencen a directivos mejor que cualquier PowerPoint. Deja que los resultados hablen.",
    reversal: "Algunas batallas requieren articulación clara de principios. No todo puede demostrarse; a veces debes defender ideas con palabras."
  },
  {
    number: 10,
    title: "Evita al infeliz y al desafortunado",
    subtitle: "Puedes morir por la miseria de otros",
    description: "Puedes contagiarte de la miseria y la desgracia de los demás. Evita a quienes atraen la mala suerte. Asóciate con los felices y afortunados.",
    category: "relationships",
    historicalExample: {
      title: "Lola Montez",
      story: "La bailarina Lola Montez destruyó la carrera de todo hombre que se asoció con ella. El rey Luis I de Baviera perdió su trono, el editor Dujarier murió en un duelo, el empresario Heald se arruinó. Su patrón de destrucción era predecible, pero los hombres seguían cayendo."
    },
    modernApplication: "Antes de unirte a un equipo o aceptar un jefe, investiga su historial. ¿Proyectos cancelados? ¿Alta rotación? ¿Conflictos constantes? Los patrones de fracaso se repiten. Elige cuidadosamente a quién te asocias profesionalmente.",
    reversal: "No confundas desgracia temporal con carácter. Algunos atraviesan períodos difíciles pero tienen resiliencia para recuperarse. Distingue entre patrones y circunstancias."
  },
  {
    number: 11,
    title: "Aprende a mantener a la gente dependiente de ti",
    subtitle: "Para mantener tu independencia, debes ser necesario",
    description: "Para mantener tu independencia debes hacer que te necesiten y te deseen. Cuanto más dependan de ti, más libertad tendrás. Nunca enseñes tanto que puedan prescindir de ti.",
    category: "relationships",
    historicalExample: {
      title: "Henry Kissinger",
      story: "Kissinger se hizo indispensable para Nixon controlando información y contactos. Ningún diplomático extranjero podía llegar al presidente sin pasar por él. Cuando Nixon intentó marginarlo, descubrió que toda su política exterior dependía del conocimiento exclusivo de Kissinger."
    },
    modernApplication: "Conviértete en el experto imprescindible de tu departamento: domina ese sistema legacy que nadie entiende, o las relaciones con clientes clave. Tu seguridad laboral viene de ser difícil de reemplazar, no de ser querido.",
    reversal: "La dependencia excesiva crea resentimiento. Permite que otros tengan cierta autonomía mientras mantienes el control sobre aspectos críticos."
  },
  {
    number: 12,
    title: "Utiliza la honestidad selectiva y la generosidad para desarmar a tu víctima",
    subtitle: "Un acto sincero de honestidad puede cubrir docenas de engaños",
    description: "Un gesto sincero y honesto puede derribar la guardia de los más suspicaces. Una vez que tu honestidad selectiva abra una brecha, podrás engañar y manipular a tu antojo.",
    category: "deception",
    historicalExample: {
      title: "El Caballo de Troya",
      story: "Los griegos dejaron un regalo generoso a las puertas de Troya: un magnífico caballo de madera. Después de años de guerra, este gesto de aparente rendición desarmó la suspicacia troyana. Llevaron el regalo dentro de sus muros, y esa noche cayó su ciudad."
    },
    modernApplication: "Al negociar con un cliente difícil, ofrece una pequeña concesión genuina al inicio: un descuento real o un servicio extra. Esta honestidad táctica baja sus defensas y facilita cerrar el acuerdo en tus términos principales.",
    reversal: "La manipulación descubierta destruye la confianza permanentemente. Usa esta táctica con moderación extrema y nunca con personas importantes para tu futuro."
  },
  {
    number: 13,
    title: "Al pedir ayuda, apela al interés propio de la gente",
    subtitle: "Si necesitas pedir ayuda, no apeles a la gratitud o compasión",
    description: "Si necesitas la ayuda de alguien, no le recuerdes tus favores pasados. En cambio, muéstrale algo en tu petición que beneficiará sus propios intereses. Responderá con entusiasmo.",
    category: "strategy",
    historicalExample: {
      title: "Los Poggio y la familia Medici",
      story: "Cuando el humanista Poggio necesitó el patrocinio de los Medici, no mencionó su erudición ni sus necesidades. En cambio, explicó cómo sus traducciones de textos clásicos aumentarían el prestigio de la familia. Los Medici lo financiaron generosamente por décadas."
    },
    modernApplication: "Al pedir ayuda a un colega senior, enmárcalo en su beneficio: 'Tu mentoría en este proyecto sería visible para dirección' o 'Podrías coliderar la presentación'. Apela a su interés en visibilidad o promoción, no a tu necesidad.",
    reversal: "Con amigos verdaderos y en momentos de crisis genuina, apelar a la lealtad y el afecto puede ser apropiado. Conoce tu audiencia."
  },
  {
    number: 14,
    title: "Muéstrate como amigo, actúa como espía",
    subtitle: "Conocer a tu rival es fundamental",
    description: "Saber sobre tu rival es fundamental. Usa espías para reunir información valiosa. Mejor aún, actúa tú mismo como espía. En conversaciones amigables, haz preguntas indirectas.",
    category: "deception",
    historicalExample: {
      title: "Talleyrand",
      story: "El diplomático Talleyrand era famoso por sus cenas encantadoras donde, entre bromas y vino, extraía secretos de embajadores de toda Europa. Nadie se sentía interrogado; todos se sentían agasajados. Mientras tanto, Talleyrand acumulaba información invaluable."
    },
    modernApplication: "En cenas de empresa o conferencias, practica hacer preguntas que parecen casuales: '¿Cómo van las cosas en tu departamento?' Escucha más de lo que hablas. Obtendrás información sobre reorganizaciones, presupuestos y oportunidades antes que nadie.",
    reversal: "El espionaje descubierto destruye relaciones. Nunca espíes a aliados cercanos o en contextos donde la confianza es fundamental para tus objetivos."
  },
  {
    number: 15,
    title: "Aplasta totalmente a tu enemigo",
    subtitle: "Más se perdió por moderación que por exceso",
    description: "Todos los grandes líderes lo saben: un enemigo aplastado a medias se recuperará y buscará venganza. Debes aniquilarlo completamente. No dejes ascuas que puedan volver a encenderse.",
    category: "strategy",
    historicalExample: {
      title: "Wu Qi y el Ejército de Chu",
      story: "Cuando el general chino Wu Qi derrotó a Chu, sus oficiales querían mostrar clemencia. Wu Qi insistió en la destrucción total. 'Un enemigo herido es más peligroso que uno muerto', dijo. Chu nunca volvió a amenazar a su reino."
    },
    modernApplication: "En competencia interna por un ascenso, si decides competir, hazlo completamente. Presentar una candidatura tibia te deja sin el puesto y con un nuevo jefe que sabe que querías su posición. Compite a fondo o retírate con elegancia.",
    reversal: "La destrucción total puede crear mártires y galvanizar nuevos enemigos. A veces, la magnanimidad en la victoria crea aliados más valiosos que la aniquilación."
  },
  {
    number: 16,
    title: "Usa la ausencia para incrementar el respeto y el honor",
    subtitle: "Demasiada circulación te devalúa",
    description: "Cuanto más te vean y escuchen, más común parecerás. Si ya estás establecido en un grupo, retirarte temporalmente te hará más admirado. Crea valor a través de la escasez.",
    category: "reputation",
    historicalExample: {
      title: "Napoleón regresa de Elba",
      story: "El exilio de Napoleón en Elba, lejos de destruirlo, lo transformó en leyenda. Francia romantizó su ausencia. Cuando regresó, soldados enviados a arrestarlo se unieron a él. Su ausencia había aumentado su poder mítico."
    },
    modernApplication: "Una vez establecida tu reputación en la empresa, no la desgastes con presencia constante en cada reunión. Un sabático para formación o un proyecto especial te hace más valorado al regresar. La escasez aumenta tu precio.",
    reversal: "Esta ley solo aplica una vez establecido. Para los nuevos, la visibilidad constante es esencial para construir reconocimiento inicial."
  },
  {
    number: 17,
    title: "Mantén a los demás en suspenso cultivando un aire de imprevisibilidad",
    subtitle: "Los seres humanos somos criaturas de hábito",
    description: "Actúa de forma impredecible. El comportamiento impredecible mantendrá a los demás fuera de equilibrio. Llevada al extremo, esta estrategia puede intimidar y aterrorizar.",
    category: "deception",
    historicalExample: {
      title: "Bobby Fischer",
      story: "El ajedrecista Bobby Fischer era famoso por llegar tarde, cambiar de estilo radicalmente entre partidas, y hacer demandas erráticas. Sus oponentes nunca sabían qué esperar. Esta incertidumbre los desestabilizaba antes de que movieran la primera pieza."
    },
    modernApplication: "No seas completamente predecible en negociaciones con proveedores o empleados. Si siempre aceptas la primera propuesta, empezarán alto. Ocasionalmente rechaza, pide tiempo, o contraoferta inesperadamente. La previsibilidad te debilita.",
    reversal: "La imprevisibilidad constante es agotadora y puede alienar a aliados que necesitan poder confiar en ti. Reserva esta táctica para contextos competitivos."
  },
  {
    number: 18,
    title: "No construyas fortalezas para protegerte, el aislamiento es peligroso",
    subtitle: "El mundo es peligroso, pero el aislamiento lo es más",
    description: "Todos buscan protegerse aislándose. Pero el aislamiento te expone a más peligros de los que te protege. Es mejor circular entre la gente, encontrar aliados y descubrir enemigos.",
    category: "strategy",
    historicalExample: {
      title: "Ch'in Shih Huang Ti",
      story: "El primer emperador de China se aisló tanto por miedo a asesinos que ningún ministro podía verlo. Sin información del mundo exterior, tomó decisiones desastrosas. Su aislamiento, diseñado para protegerlo, aceleró la caída de su dinastía."
    },
    modernApplication: "Resiste la tentación de trabajar 100% remoto o aislarte en tu despacho. Las conversaciones de pasillo, cafés con colegas y eventos de empresa generan oportunidades, información y alianzas que el aislamiento elimina.",
    reversal: "Períodos cortos de aislamiento pueden ser regeneradores y productivos. La clave es que sean temporales y estratégicos, no defensivos y permanentes."
  },
  {
    number: 19,
    title: "Conoce con quién tratas, no ofendas a la persona equivocada",
    subtitle: "Hay muchos tipos de personas, y cada una reacciona diferente",
    description: "Nunca asumas que la persona con la que tratas es más débil o menos importante de lo que parece. Hay quienes se vengarán a toda costa. Elige cuidadosamente a tus víctimas y oponentes.",
    category: "relationships",
    historicalExample: {
      title: "Muhammad Ali y Joe Frazier",
      story: "Ali humilló públicamente a Frazier, llamándolo 'gorila' y 'tío Tom'. Subestimó la profundidad del resentimiento que creaba. Frazier guardó ese odio por décadas, rechazando toda reconciliación. Ali ganó las peleas pero creó un enemigo eterno."
    },
    modernApplication: "Antes de enfrentarte a un colega problemático o negociar duramente con un cliente, investiga. ¿Tiene conexiones con dirección? ¿Historial de demandas? ¿Amigos en el comité? Esta inteligencia previene errores costosos para tu carrera.",
    reversal: "No dejes que el miedo a ofender te paralice. A veces el conflicto es necesario. La clave es elegir tus batallas con información completa."
  },
  {
    number: 20,
    title: "No te comprometas con nadie",
    subtitle: "Los tontos se apresuran a elegir bandos",
    description: "No te comprometas con ningún bando o causa más que contigo mismo. Manteniendo tu independencia, te conviertes en el amo de otros, enfrentando a las personas entre sí.",
    category: "self-mastery",
    historicalExample: {
      title: "Isabel I de Inglaterra",
      story: "Isabel I mantuvo a Europa en suspenso durante décadas sobre con quién se casaría. España, Francia y Austria competían por su favor. Al no comprometerse con nadie, extrajo concesiones de todos mientras mantenía su independencia absoluta."
    },
    modernApplication: "En política de oficina, evita alinearte abiertamente con facciones. Cuando dos directivos compitan, mantén buenas relaciones con ambos. Tu neutralidad te hace valioso y protegido sin importar quién gane la batalla interna.",
    reversal: "Hay causas y personas que merecen compromiso total. La neutralidad perpetua puede parecer cobardía o falta de principios. Elige sabiamente cuándo comprometerte."
  },
  {
    number: 21,
    title: "Finge candidez para atrapar a los cándidos",
    subtitle: "Nadie gusta de sentirse más estúpido que los demás",
    description: "Haz que tus víctimas se sientan más inteligentes que tú. Una vez convencidos de esto, nunca sospecharán que tienes motivos ulteriores.",
    category: "deception",
    historicalExample: {
      title: "Columbo",
      story: "El detective de TV Columbo resolvía casos haciéndose el tonto. Su apariencia descuidada y preguntas aparentemente ingenuas hacían que los sospechosos bajaran la guardia. Lo subestimaban hasta que era demasiado tarde."
    },
    modernApplication: "En due diligence o reuniones con proveedores, a veces conviene parecer menos informado. '¿Cómo funciona exactamente esto?' Las preguntas 'ingenuas' revelan información que no compartirían con alguien que pareciera experto.",
    reversal: "Parecer demasiado tonto puede costarte respeto y oportunidades. Esta táctica funciona mejor en encuentros puntuales que en relaciones a largo plazo."
  },
  {
    number: 22,
    title: "Usa la táctica de la rendición para ganar poder",
    subtitle: "Rendirse puede ser una herramienta de poder",
    description: "Cuando seas más débil, nunca luches solo por honor. Elige la rendición. Te dará tiempo para recuperarte, tiempo para esperar a que el poder de tu conquistador decline.",
    category: "timing",
    historicalExample: {
      title: "Bertolt Brecht ante el HUAC",
      story: "Cuando el comité de actividades antiamericanas interrogó a Brecht, no desafió como otros. Fue cortés, confuso, aparentemente cooperativo. Los interrogadores se frustraron pero no pudieron atraparlo. Al día siguiente, Brecht voló a Europa, libre."
    },
    modernApplication: "Cuando un ejecutivo poderoso te critique injustamente en una reunión, a veces es mejor asentir y agradecer el feedback. Defiéndete en privado después, o espera a que su posición se debilite. Vive para pelear otro día.",
    reversal: "La rendición constante destruye tu reputación y autoestima. Úsala como táctica temporal, nunca como modo de vida."
  },
  {
    number: 23,
    title: "Concentra tus fuerzas",
    subtitle: "Conserva tus fuerzas y energía manteniéndolas concentradas",
    description: "No desperdicies recursos tratando de estar en todas partes. Encuentra la fuente de poder, la mina de oro que te hará rico. Golpea el petróleo y para de cavar.",
    category: "strategy",
    historicalExample: {
      title: "Los Rothschild",
      story: "La familia Rothschild concentró todos sus recursos en un solo sector: las finanzas. Mientras otros diversificaban, ellos profundizaban. Esta concentración les dio una ventaja insuperable que los hizo la familia más rica de Europa."
    },
    modernApplication: "En tu carrera, es mejor ser el experto indiscutible en un área que generalista en muchas. Domina un nicho específico (IA aplicada, M&A, UX research) hasta que tu nombre sea sinónimo de esa especialidad en tu industria.",
    reversal: "La concentración excesiva puede hacerte vulnerable a cambios del mercado. Una vez dominado tu nicho, la diversificación estratégica reduce riesgos."
  },
  {
    number: 24,
    title: "Juega el papel del cortesano perfecto",
    subtitle: "El cortesano prospera en un mundo donde todo gira alrededor del poder",
    description: "El cortesano perfecto domina el arte de la indirección; halaga, cede ante sus superiores y ejerce poder sobre los demás de la manera más oblicua y gentil.",
    category: "relationships",
    historicalExample: {
      title: "Baldassare Castiglione",
      story: "Castiglione escribió 'El Cortesano' en el siglo XVI, el manual definitivo de la política de palacio. Enseñaba 'sprezzatura': hacer que todo pareciera sin esfuerzo, ocultar la ambición tras una fachada de gracia natural."
    },
    modernApplication: "En corporaciones jerárquicas, aprende el arte de la promoción invisible. Menciona tus logros en contextos naturales, no en auto-bombo. Construye relaciones con ejecutivos en eventos sociales, no pidiendo reuniones. La ambición debe ser invisible.",
    reversal: "El cortesano perfecto puede perder su autenticidad. Reserva un espacio privado donde puedas ser genuino, lejos de las máscaras que requiere el poder."
  },
  {
    number: 25,
    title: "Procura recrearte permanentemente",
    subtitle: "No aceptes los roles que la sociedad te impone",
    description: "No aceptes el papel que te asigna la sociedad. Forja tu propia identidad, una que capte la atención y nunca aburra. Sé el dueño de tu imagen en lugar de dejar que otros la definan.",
    category: "self-mastery",
    historicalExample: {
      title: "David Bowie",
      story: "Bowie se reinventó constantemente: Ziggy Stardust, el Thin White Duke, el artista de Berlín. Cada transformación mantenía al público fascinado. Cuando otros artistas se estancaban, Bowie evolucionaba."
    },
    modernApplication: "No te definas por tu título actual. El 'experto en Excel' de ayer es obsoleto hoy. Reinvéntate constantemente: aprende IA, lidera un proyecto fuera de tu zona, cambia de industria. Tu marca profesional debe evolucionar antes de quedar obsoleta.",
    reversal: "Las reinvenciones demasiado frecuentes pueden parecer falta de sustancia. Construye sobre una base sólida de competencia real."
  },
  {
    number: 26,
    title: "Mantén tus manos limpias",
    subtitle: "Nunca parezcas manchado por errores o actos desagradables",
    description: "Debes parecer un modelo de civilidad y eficiencia. Tus manos nunca deben ensuciarse. Usa a otros como chivos expiatorios para disfrazar tu participación.",
    category: "reputation",
    historicalExample: {
      title: "Cleopatra y el asesinato de Pompeyo",
      story: "Cuando Pompeyo huyó a Egipto, Cleopatra quería su muerte pero no la mancha. Sus ministros lo ejecutaron. Ella expresó horror público, mantuvo sus manos limpias, y ganó el favor de César que perseguía a Pompeyo."
    },
    modernApplication: "Cuando se necesiten despidos o recortes, haz que RH o tu subordinado los anuncie. Tú apareces después como la voz empática que 'hizo todo lo posible'. Tu rol debe ser el de voz compasiva, no el verdugo directo.",
    reversal: "Esconderte detrás de otros constantemente puede parecer cobardía. Hay momentos en que un líder debe tomar responsabilidad visible por decisiones difíciles."
  },
  {
    number: 27,
    title: "Juega con la necesidad de la gente de creer para crear un culto",
    subtitle: "La gente tiene una abrumadora necesidad de creer en algo",
    description: "Las personas quieren desesperadamente creer en algo. Conviértete en el punto focal de tal deseo ofreciéndoles una causa, una nueva fe para seguir. Sé vago pero prometedor.",
    category: "deception",
    historicalExample: {
      title: "Steve Jobs y Apple",
      story: "Jobs transformó una empresa de computadoras en una religión secular. Los lanzamientos de productos eran ceremonias. Los usuarios eran creyentes. El diseño era dogma. Apple no vendía tecnología; vendía significado y pertenencia."
    },
    modernApplication: "Para liderar equipos excepcionales, ofrece una visión que trascienda el trabajo diario. No vendas tareas, vende misión. Los mejores talentos quieren ser parte de algo significativo, no solo cobrar un sueldo. Construye propósito.",
    reversal: "Los cultos pueden volverse contra sus creadores. La fe que inspiras debe tener suficiente sustancia para sobrevivir el escrutinio."
  },
  {
    number: 28,
    title: "Actúa con audacia",
    subtitle: "Si no estás seguro de algo, no lo hagas",
    description: "La timidez es peligrosa. Cualquier error que cometas a través de la audacia se corrige fácilmente con más audacia. Todos admiran al audaz; nadie honra al tímido.",
    category: "self-mastery",
    historicalExample: {
      title: "Hernán Cortés quema sus naves",
      story: "Al llegar a México, Cortés quemó sus naves, eliminando la opción de retirada. Esta audacia extrema galvanizó a sus hombres. Sin alternativa, la única opción era la victoria. La audacia se convirtió en profecía autocumplida."
    },
    modernApplication: "Cuando propongas una iniciativa a dirección, hazlo con convicción total. Las propuestas tibias mueren en comité. Pide el presupuesto completo, el equipo necesario, el timeline ambicioso. La audacia inspira confianza; la timidez genera dudas.",
    reversal: "La audacia sin inteligencia es temeridad. Analiza primero, decide después, pero una vez decidido, actúa sin vacilación."
  },
  {
    number: 29,
    title: "Planifica todo el camino hasta el final",
    subtitle: "El final lo es todo",
    description: "Planifica hasta el final. No te dejes llevar por deseos y sueños vagos. Al planificar hasta el final, no te abrumarán las circunstancias y sabrás cuándo parar.",
    category: "strategy",
    historicalExample: {
      title: "Bismarck y las Guerras de Unificación",
      story: "Bismarck planeó tres guerras con precisión quirúrgica, cada una con objetivos limitados y claros. Sabía exactamente cuándo parar. Después de cada victoria, resistió la tentación de ir más lejos. Esta disciplina creó el Imperio Alemán."
    },
    modernApplication: "Antes de lanzar cualquier proyecto o negociación, define claramente qué constituye éxito, cuándo declarar victoria y cuándo retirarte. Sin criterios de salida claros, los proyectos se alargan y las negociaciones se enconan indefinidamente.",
    reversal: "La planificación excesiva puede paralizar. A veces debes empezar con un plan imperfecto y adaptarte sobre la marcha."
  },
  {
    number: 30,
    title: "Haz que tus logros parezcan no requerir esfuerzo",
    subtitle: "Tu acción debe parecer natural y ejecutada con facilidad",
    description: "Tus acciones deben parecer naturales y ejecutadas con facilidad. Todo el trabajo duro y la práctica que implican deben ocultarse. Cuando actúes, hazlo sin esfuerzo, como si pudieras hacer mucho más.",
    category: "reputation",
    historicalExample: {
      title: "Houdini",
      story: "Houdini practicaba cada escape miles de veces. Pero en el escenario, todo parecía magia espontánea. Si el público hubiera visto las horas de preparación, la ilusión se habría roto. El genio aparente requería trabajo oculto."
    },
    modernApplication: "En presentaciones ejecutivas y entregas de proyectos, muestra solo el resultado final pulido. Nunca expongas las 47 versiones de la propuesta, las noches sin dormir ni los fallos intermedios. Tu jefe y clientes deben percibir competencia natural, no esfuerzo desesperado.",
    reversal: "En contextos educativos o de mentoría, mostrar el proceso ayuda a otros a aprender. Adapta esta ley al contexto."
  },
  {
    number: 31,
    title: "Controla las opciones, haz que otros jueguen con las cartas que tú repartes",
    subtitle: "Los mejores engaños parecen dar opciones a la otra persona",
    description: "Dale a las personas opciones que te favorezcan sin importar cuál elijan. Fuérzalos a elegir entre dos males, ambos sirviendo a tu propósito. Ponlos en dilemas de los que no puedan escapar.",
    category: "deception",
    historicalExample: {
      title: "Henry Ford y el Modelo T",
      story: "Ford famosamente dijo que los clientes podían tener el Modelo T en cualquier color, 'siempre que sea negro'. Ofrecía la ilusión de elección mientras controlaba completamente las opciones. Los clientes se sentían empoderados eligiendo entre opciones que Ford definía."
    },
    modernApplication: "En negociaciones salariales o de contratos, presenta opciones que te beneficien: 'Puedo empezar con el salario base si incluye equity, o con el salario completo sin equity'. En reuniones con stakeholders, ofrece dos fechas de entrega que funcionen para ti: 'Podemos entregar el MVP en marzo o la versión completa en junio'.",
    reversal: "Las personas eventualmente detectan opciones falsas. Usa esta táctica con moderación o arriesgas perder credibilidad."
  },
  {
    number: 32,
    title: "Juega con las fantasías de la gente",
    subtitle: "La verdad suele ser evitada porque es fea y desagradable",
    description: "La vida es tan dura y perturbadora que las personas que pueden fabricar romance o conjurar fantasías son como oasis en el desierto. Nunca apeles a la verdad, sino a las fantasías de las masas.",
    category: "deception",
    historicalExample: {
      title: "George Lucas y Star Wars",
      story: "En una era de cine cínico post-Vietnam, Lucas ofreció una fantasía de héroes claros, villanos obvios y el bien triunfando. El público, hambriento de escapismo, lo hizo el film más exitoso de la historia."
    },
    modernApplication: "Cuando presentes un proyecto a inversores o vendas una idea a la dirección, no te limites a métricas y datos. Pinta la visión: 'Imagina un mundo donde nuestros clientes...' Los ejecutivos aprueban presupuestos para futuros inspiradores, no para hojas de cálculo.",
    reversal: "Las fantasías sin sustancia eventualmente decepcionan. La mejor estrategia combina una visión inspiradora con entrega real."
  },
  {
    number: 33,
    title: "Descubre el talón de Aquiles de cada persona",
    subtitle: "Todos tienen una debilidad, una brecha en la muralla",
    description: "Todos tienen una debilidad, un botón que una vez presionado, los hará actuar. Encuentra ese punto débil. Puede ser una inseguridad, una emoción incontrolable, un deseo secreto.",
    category: "strategy",
    historicalExample: {
      title: "Richelieu y Ana de Austria",
      story: "El cardenal Richelieu descubrió que la reina Ana tenía correspondencia secreta con España. Este conocimiento le dio poder absoluto sobre ella. Nunca lo usó abiertamente; la amenaza implícita bastaba para su control."
    },
    modernApplication: "Estudia qué motiva a cada persona clave en tu organización. Tu jefe puede temer quedar mal ante su superior. Tu compañero competitivo puede obsesionarse con el reconocimiento público. El cliente difícil puede tener presión de su junta directiva. Entiende estas presiones y podrás influir efectivamente.",
    reversal: "Explotar debilidades crea enemigos vengativos. Usa este conocimiento para entender y protegerte, no necesariamente para atacar."
  },
  {
    number: 34,
    title: "Actúa como un rey para ser tratado como tal",
    subtitle: "La forma en que te presentas determinará cómo te tratan",
    description: "La forma en que te comportas a menudo determinará cómo te tratan. Si actúas como rey, serás tratado como uno. Exige respeto y lo recibirás. Sé tu propio monarca.",
    category: "self-mastery",
    historicalExample: {
      title: "Luis XIV construye Versalles",
      story: "Luis XIV transformó un pabellón de caza en el palacio más grandioso de Europa. Esta escenografía de poder no era vanidad; era estrategia. En Versalles, ningún noble podía olvidar quién era el rey."
    },
    modernApplication: "En reuniones ejecutivas, siéntate en la mesa, no contra la pared. Habla con seguridad, no pidiendo permiso. Vístete al nivel del puesto que aspiras, no del que tienes. Si negocías tu salario como si lo merecieras, lo obtendrás. Si lo pides como favor, no lo conseguirás.",
    reversal: "La arrogancia sin sustancia genera ridículo. Tu comportamiento regio debe estar respaldado por competencia real."
  },
  {
    number: 35,
    title: "Domina el arte del timing",
    subtitle: "Nunca parezcas tener prisa, la paciencia es una virtud",
    description: "Nunca parezcas tener prisa. Detecta el espíritu de los tiempos y las tendencias que te llevarán al poder. Aprende a retroceder cuando el tiempo aún no está maduro, y a golpear cuando llegue el momento.",
    category: "timing",
    historicalExample: {
      title: "Joseph Fouché sobrevive a todos",
      story: "Fouché sirvió a la Revolución, a Napoleón y a la Restauración. Mientras otros morían por lealtad a regímenes caídos, Fouché detectaba el cambio antes que nadie y se reposicionaba. Su timing político era infalible."
    },
    modernApplication: "No propongas cambios radicales cuando la empresa está en crisis o cuando tu jefe enfrenta presión. Espera el momento en que la organización esté receptiva. En negociaciones, nunca muestres urgencia. El que tiene prisa pierde. Domina el arte de saber cuándo proponer un ascenso, pedir un aumento o lanzar una iniciativa.",
    reversal: "Esperar el momento perfecto puede significar perder la oportunidad. A veces hay que crear el momento en lugar de esperarlo."
  },
  {
    number: 36,
    title: "Desprecia las cosas que no puedes tener",
    subtitle: "Ignorar es la mejor venganza",
    description: "Al reconocer un problema menor, le das existencia y credibilidad. Cuanta más atención prestes a un enemigo, más fuerte lo haces. A veces es mejor dejar las cosas en paz.",
    category: "self-mastery",
    historicalExample: {
      title: "La zorra y las uvas",
      story: "La fábula de Esopo muestra sabiduría práctica: la zorra, incapaz de alcanzar las uvas, declara que están verdes. No es autoengaño; es economía emocional. Obsesionarse con lo inalcanzable desperdicia energía."
    },
    modernApplication: "Si te rechazan para un ascenso o pierdes una cuenta importante, nunca muestres resentimiento. Actúa como si tuvieras tantas oportunidades que una menos no te afecta. 'No obtuve ese proyecto, pero tengo tres más en pipeline'. Esta actitud te hace más deseable para futuras oportunidades.",
    reversal: "Hay batallas que vale la pena pelear incluso si parecen perdidas. Distingue entre obstáculos temporales y muros permanentes."
  },
  {
    number: 37,
    title: "Crea espectáculos atractivos",
    subtitle: "Las imágenes llamativas y los gestos simbólicos crean el aura de poder",
    description: "Imágenes llamativas y gestos simbólicos crean un aura de poder. Organiza espectáculos para los que te rodean, llenos de imágenes radiantes y símbolos. Deslumbra con la apariencia, no con los hechos.",
    category: "reputation",
    historicalExample: {
      title: "Los Desfiles de Núremberg",
      story: "Los nazis entendieron el poder del espectáculo. Los desfiles de Núremberg, diseñados por Albert Speer, usaban luz, arquitectura y movimiento de masas para crear experiencias abrumadoras que suspendían el pensamiento crítico."
    },
    modernApplication: "Tus presentaciones ante el board o lanzamientos de producto deben ser eventos memorables, no solo transmisión de información. Un demo impactante, una visualización de datos sorprendente, una historia que capte emocionalmente. Los ejecutivos recuerdan experiencias, no slides llenos de texto.",
    reversal: "El espectáculo sin sustancia eventualmente se revela vacío. Los mejores espectáculos amplifican algo real."
  },
  {
    number: 38,
    title: "Piensa como quieras pero compórtate como los demás",
    subtitle: "Si haces alarde de ir contra la corriente, la gente pensará que solo buscas atención",
    description: "Si haces alarde de tus ideas no convencionales, la gente pensará que solo buscas atención. Mezcla, nutre al espíritu libre interior, pero exteriormente adopta los caminos de la mayoría.",
    category: "self-mastery",
    historicalExample: {
      title: "Galileo ante la Inquisición",
      story: "Galileo abjuró públicamente del heliocentrismo para salvar su vida. Algunos lo criticaron por cobarde, pero vivió para seguir trabajando. Sus ideas sobrevivieron porque él sobrevivió. La ortodoxia exterior protegió la herejía interior."
    },
    modernApplication: "En empresas conservadoras, adapta tu apariencia y comunicación al estilo institucional mientras mantienes ideas disruptivas. No pelees batallas innecesarias sobre código de vestimenta o jerga corporativa. Esa energía guárdala para proponer cambios que realmente importen. Gana credibilidad conformándote en lo superficial para innovar en lo sustancial.",
    reversal: "Hay momentos donde el silencio es complicidad. Cuando los principios fundamentales están en juego, la disidencia visible puede ser necesaria."
  },
  {
    number: 39,
    title: "Revuelve las aguas para pescar",
    subtitle: "La ira y la emoción son contraproducentes",
    description: "La ira y la emoción son estratégicamente contraproducentes. Debes estar siempre calmado y objetivo. Pero si puedes hacer enojar a tus enemigos mientras permaneces calmado, ganarás una ventaja.",
    category: "strategy",
    historicalExample: {
      title: "Muhammad Ali vs. George Foreman",
      story: "Antes del 'Rumble in the Jungle', Ali provocó a Foreman incesantemente. Foreman, furioso, gastó su energía en los primeros rounds tratando de noquear a Ali. Ali, calmado, absorbió los golpes y ganó cuando Foreman se agotó."
    },
    modernApplication: "En reuniones tensas o negociaciones difíciles, mantén la calma absoluta mientras observas qué hace perder los estribos al otro. Un ejecutivo frustrado revela información que no daría en calma. Tu serenidad es una ventaja estratégica. Si alguien intenta provocarte en una reunión, sonríe y responde con datos.",
    reversal: "Provocar a ciertos oponentes puede ser peligroso. Algunos pelean mejor enojados. Conoce a tu oponente antes de usar esta táctica."
  },
  {
    number: 40,
    title: "Desprecia la comida gratis",
    subtitle: "Lo que se ofrece gratis es peligroso",
    description: "Lo que se ofrece gratis es peligroso. Siempre hay trampas ocultas. Lo que vale tiene precio. Pagando tu camino, te mantienes libre de gratitudes, culpas y engaños.",
    category: "self-mastery",
    historicalExample: {
      title: "Los griegos y los persas",
      story: "Cuando el rey persa ofreció agua y tierra gratis a las ciudades griegas a cambio de sumisión, Esparta entendió la trampa. El regalo era el precio de la libertad. Rechazarlo costó sangre, pero preservó su independencia."
    },
    modernApplication: "Desconfía de ofertas laborales 'increíbles' sin examinar la letra pequeña. Un salario alto puede venir con expectativas imposibles. Un título impresionante puede carecer de poder real. Los favores de compañeros políticos vienen con expectativas de reciprocidad. En el mundo profesional, siempre pregunta: '¿Cuál es el costo real de esto?'",
    reversal: "La generosidad genuina existe. No rechaces toda ayuda por paranoia. Distingue entre regalos con condiciones y generosidad real."
  },
  {
    number: 41,
    title: "Evita seguir los pasos de un gran hombre",
    subtitle: "Lo que ocurre primero siempre parece mejor",
    description: "Lo que ocurre primero siempre parece más original que lo que viene después. Si sucedes a un gran hombre, tendrás que lograr el doble para eclipsarlo. Establece tu propio nombre y camino.",
    category: "reputation",
    historicalExample: {
      title: "Alejandro Magno vs. Filipo II",
      story: "Alejandro heredó de su padre Filipo un ejército invencible y un reino poderoso. Para no vivir a su sombra, conquistó el mundo conocido. Solo superando lo que parecía insuperable pudo establecer su propia leyenda."
    },
    modernApplication: "Si heredas el rol de un predecesor exitoso (el anterior director de producto, el fundador carismático), no intentes imitarlo. Serás juzgado por comparación. En cambio, redefine el rol: 'Mi predecesor era excelente en X. Yo traeré Y, que es lo que ahora necesitamos'. Crea tu propia categoría.",
    reversal: "A veces la continuidad es valor. Si el predecesor construyó algo excelente, mejorarlo incrementalmente puede ser más sabio que revolucionar."
  },
  {
    number: 42,
    title: "Golpea al pastor y se dispersarán las ovejas",
    subtitle: "Los problemas a menudo tienen su origen en un solo individuo",
    description: "Los problemas pueden rastrearse hasta un solo individuo fuerte, el agitador. No negocies, neutralízalo. Encuentra la fuente del problema y golpéala. Las ovejas se dispersarán.",
    category: "strategy",
    historicalExample: {
      title: "Atenas y los Treinta Tiranos",
      story: "Cuando los Treinta Tiranos aterrorizaban Atenas, Trasíbulo no atacó a todos. Identificó y eliminó a Critias, el líder más despiadado. Sin su cabeza, los demás tiranos perdieron cohesión y cayeron rápidamente."
    },
    modernApplication: "En equipos disfuncionales, identifica al instigador principal. A menudo una sola persona tóxica contamina la dinámica de todo un departamento con chismes, negatividad o sabotaje pasivo. Abordar directamente a esa persona (o lograr que sea reasignada) puede transformar la cultura del equipo completo.",
    reversal: "A veces el 'pastor' es síntoma, no causa. Eliminar un líder problemático sin abordar problemas estructurales solo produce un nuevo líder problemático."
  },
  {
    number: 43,
    title: "Trabaja sobre el corazón y la mente de los demás",
    subtitle: "La coerción crea una reacción que eventualmente trabaja contra ti",
    description: "La coerción crea una reacción que eventualmente trabajará en tu contra. Debes seducir a los demás para que quieran moverse en tu dirección. Seduce apelando a sus emociones.",
    category: "relationships",
    historicalExample: {
      title: "Chuko Liang captura a Meng Huo",
      story: "El estratega Chuko Liang capturó al rebelde Meng Huo siete veces, y siete veces lo liberó con honores. Finalmente, Meng Huo se rindió no por la fuerza sino por vergüenza ante tanta generosidad. Se convirtió en aliado leal de por vida."
    },
    modernApplication: "Los mejores líderes no dan órdenes; hacen que su equipo quiera seguirlos. Conecta cada proyecto con las aspiraciones individuales: '¿Este desafío técnico te ayudará a crecer hacia el rol senior que quieres?' El empleado comprometido emocionalmente trabaja con pasión; el obligado hace el mínimo.",
    reversal: "Hay situaciones donde la acción decisiva es necesaria antes de que haya tiempo para persuadir. La seducción es lenta; a veces la velocidad es esencial."
  },
  {
    number: 44,
    title: "Desarma y enfurece con el efecto espejo",
    subtitle: "El espejo refleja la realidad pero también es la herramienta perfecta para el engaño",
    description: "Cuando imitas a tus enemigos, los confundes. El Efecto Espejo los burla y humilla. Usan su propia estrategia contra ellos mismos. Sostén un espejo frente a sus psiques.",
    category: "deception",
    historicalExample: {
      title: "Alcibiades el camaleón",
      story: "Alcibiades servía a Atenas, luego a Esparta, luego a Persia, adaptándose perfectamente a cada cultura. En Esparta era austero; en Persia, lujoso. Este efecto espejo le permitió sobrevivir y prosperar donde otros habrían sido destruidos."
    },
    modernApplication: "Adapta tu estilo de comunicación a cada stakeholder. Con el CFO, habla de ROI y métricas. Con el CTO, habla de arquitectura y escalabilidad. Con el CEO, habla de visión y mercado. Reflejar el lenguaje y prioridades de cada interlocutor crea conexión inmediata y aumenta tu influencia en toda la organización.",
    reversal: "La imitación excesiva puede parecer burla o falta de personalidad propia. Usa el espejo sutilmente, no como parodia."
  },
  {
    number: 45,
    title: "Predica la necesidad de cambio pero nunca reformes demasiado a la vez",
    subtitle: "Todos entienden la necesidad de cambio, pero el cambio es traumático",
    description: "Todos entienden la necesidad de cambio en abstracto, pero a nivel cotidiano son criaturas de hábito. Mucho cambio es traumático. Haz que el cambio se sienta como una mejora suave del pasado.",
    category: "timing",
    historicalExample: {
      title: "Augusto transforma Roma",
      story: "Augusto convirtió la República Romana en un Imperio, pero lo hizo tan gradualmente que muchos no notaron el cambio. Mantuvo las formas republicanas mientras vaciaba su contenido. Roma se transformó sin revolución."
    },
    modernApplication: "Cuando llegues como nuevo líder o propongas transformaciones, no destruyas lo existente. Enmarca cambios como evolución natural: 'Basándonos en lo que ya funciona bien, vamos a...' Los empleados resisten revoluciones que invalidan su trabajo previo. El cambio gradual encuentra menos resistencia y logra más.",
    reversal: "Hay crisis que requieren cambio radical inmediato. Cuando el edificio arde, no remodelas gradualmente; evacuas."
  },
  {
    number: 46,
    title: "Nunca parezcas demasiado perfecto",
    subtitle: "Parecer mejor que los demás es peligroso",
    description: "Parecer mejor que los demás es siempre peligroso, pero más peligroso aún es parecer que no tienes defectos. La envidia crea enemigos silenciosos. Muestra defectos inofensivos ocasionalmente.",
    category: "reputation",
    historicalExample: {
      title: "Joe DiMaggio y Marilyn Monroe",
      story: "DiMaggio era demasiado perfecto: atleta, guapo, exitoso. Esto generaba envidia intensa. Monroe, en cambio, mostraba vulnerabilidad. Su imperfección la hacía adorable donde la perfección de DiMaggio lo hacía distante."
    },
    modernApplication: "Si siempre pareces tener éxito sin esfuerzo, generarás envidia silenciosa entre colegas. Comparte ocasionalmente pequeñas luchas: 'Este proyecto casi me mata el mes pasado'. Esta vulnerabilidad estratégica te humaniza, desarma la envidia y crea aliados donde la perfección aparente crea enemigos.",
    reversal: "Hay contextos donde solo la excelencia impecable es aceptable. Conoce cuándo la perfección es esperada y cuándo la humanidad es apreciada."
  },
  {
    number: 47,
    title: "No vayas más allá de tu objetivo original, aprende a parar cuando ganes",
    subtitle: "El momento de la victoria es a menudo el de mayor peligro",
    description: "El momento de la victoria es a menudo el momento de mayor peligro. En el calor de la victoria, la arrogancia puede empujarte más allá de tu meta original. No dejes que el éxito se te suba a la cabeza.",
    category: "timing",
    historicalExample: {
      title: "Napoleón invade Rusia",
      story: "Después de dominar Europa, Napoleón podría haber parado. Pero el éxito alimentó su ambición. Invadió Rusia, perdió su ejército, y comenzó su caída. La victoria en Europa llevó a la derrota final por no saber parar."
    },
    modernApplication: "Después de un gran éxito (un ascenso, un proyecto exitoso, un bonus excepcional), resiste la urgencia de inmediatamente pedir más. Consolida tu posición, construye sobre lo ganado. Muchos profesionales arruinan su reputación pidiendo demasiado después de ganar. Saber parar en el momento de victoria es un arte.",
    reversal: "Hay momentos donde el momentum debe aprovecharse. Saber cuándo parar y cuándo presionar es un arte, no una fórmula."
  },
  {
    number: 48,
    title: "Sé cambiante en tu forma",
    subtitle: "Al tomar una forma, al tener un plan visible, te abres al ataque",
    description: "Al tomar una forma visible, te abres al ataque. En lugar de tomar una forma que tu enemigo pueda captar, mantente adaptable y en movimiento. Acepta que nada es seguro y ninguna ley es fija.",
    category: "strategy",
    historicalExample: {
      title: "El Agua según Sun Tzu",
      story: "Sun Tzu escribió: 'Sé como el agua. El agua adapta su forma al terreno. No tiene forma permanente. Así también el estratega exitoso no tiene tácticas permanentes.' La formlessness es la forma definitiva."
    },
    modernApplication: "No te aferres a un solo rol, industria o habilidad. El profesional que solo sabe una cosa queda obsoleto cuando esa cosa cambia. Mantén siempre habilidades transferibles, cultiva redes en múltiples sectores, y nunca dependas de una sola fuente de ingresos o influencia. La adaptabilidad es la meta-habilidad profesional definitiva.",
    reversal: "La flexibilidad sin principios es oportunismo vacío. Mantén valores centrales firmes mientras adaptas tácticas y formas externas."
  }
]

export const categoryLabels: Record<Law['category'], string> = {
  reputation: 'Reputación',
  strategy: 'Estrategia',
  deception: 'Engaño',
  relationships: 'Relaciones',
  timing: 'Timing',
  'self-mastery': 'Autodominio'
}

export const categoryColors: Record<Law['category'], { bg: string; text: string; border: string }> = {
  reputation: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  strategy: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  deception: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  relationships: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  timing: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  'self-mastery': { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' }
}
