export interface Law {
  number: number
  title: string
  subtitle: string
  description: string
  category: 'reputation' | 'strategy' | 'deception' | 'relationships' | 'timing' | 'self-mastery'
}

export const laws: Law[] = [
  {
    number: 1,
    title: "Nunca le hagas sombra a tu amo",
    subtitle: "Haz siempre que los que están por encima de ti se sientan cómodamente superiores",
    description: "En tu deseo de agradar y de impresionar, no te pases de la raya y no dejes que tus talentos eclipsen a los de tu superior. Haz que se sienta más brillante de lo que es y alcanzarás las cimas del poder.",
    category: "relationships"
  },
  {
    number: 2,
    title: "No confíes demasiado en tus amigos, aprende a usar a tus enemigos",
    subtitle: "Los amigos te traicionarán más rápido porque se sienten con derecho",
    description: "Ten cuidado con los amigos, ya que te traicionarán con mayor rapidez, pues son más propensos a la envidia. En cambio, contrata a un antiguo enemigo y te será más leal que un amigo.",
    category: "relationships"
  },
  {
    number: 3,
    title: "Disimula tus intenciones",
    subtitle: "Mantén a la gente desequilibrada y en la oscuridad",
    description: "Nunca reveles el propósito de tus actos. Mantén a los demás en un estado de incertidumbre. Si no tienen idea de lo que quieres lograr, no podrán preparar una defensa.",
    category: "deception"
  },
  {
    number: 4,
    title: "Di siempre menos de lo necesario",
    subtitle: "El poder de las palabras está en su escasez",
    description: "Cuanto más hables, más común parecerás y menos control tendrás. Personas poderosas impresionan e intimidan diciendo menos. Cuanto más digas, más probabilidades tendrás de decir algo tonto.",
    category: "self-mastery"
  },
  {
    number: 5,
    title: "Casi todo depende de tu prestigio, defiéndelo a muerte",
    subtitle: "Tu reputación es la piedra angular del poder",
    description: "La reputación es la piedra angular del poder. Solo con tu reputación puedes intimidar y ganar. Una vez que se debilita, serás vulnerable y atacado por todos lados. Haz tu reputación invulnerable.",
    category: "reputation"
  },
  {
    number: 6,
    title: "Llama la atención a cualquier precio",
    subtitle: "Todo se juzga por su apariencia; lo invisible no cuenta",
    description: "Destácate de la multitud. Sé llamativo, misterioso, incluso escandaloso. Atraer la atención te otorga poder. Es mejor ser difamado que ignorado.",
    category: "reputation"
  },
  {
    number: 7,
    title: "Haz que otros trabajen por ti, pero llévate siempre el crédito",
    subtitle: "Usa la sabiduría y el trabajo de los demás para promover tu causa",
    description: "Usa la sabiduría, el conocimiento y el trabajo de otros para promover tu propia causa. No solo te ahorrará tiempo y energía, sino que te dará un aura de eficiencia y rapidez.",
    category: "strategy"
  },
  {
    number: 8,
    title: "Haz que la gente vaya hacia ti, usa carnada si es necesario",
    subtitle: "Cuando fuerces a otros a actuar, tú controlas",
    description: "Cuando obligas a otros a actuar, eres tú quien controla. Es mejor hacer que tu oponente venga a ti, abandonando sus propios planes. Atráelo con ganancias fabulosas, luego ataca.",
    category: "strategy"
  },
  {
    number: 9,
    title: "Gana a través de acciones, nunca por argumentos",
    subtitle: "Las victorias verbales son vacías",
    description: "Cualquier triunfo momentáneo que hayas logrado mediante argumentos será una victoria pírrica. El resentimiento durará mucho más. Es más poderoso hacer que otros estén de acuerdo contigo mediante tus acciones.",
    category: "strategy"
  },
  {
    number: 10,
    title: "Evita al infeliz y al desafortunado",
    subtitle: "Puedes morir por la miseria de otros",
    description: "Puedes contagiarte de la miseria y la desgracia de los demás. Evita a quienes atraen la mala suerte. Asóciate con los felices y afortunados.",
    category: "relationships"
  },
  {
    number: 11,
    title: "Aprende a mantener a la gente dependiente de ti",
    subtitle: "Para mantener tu independencia, debes ser necesario",
    description: "Para mantener tu independencia debes hacer que te necesiten y te deseen. Cuanto más dependan de ti, más libertad tendrás. Nunca enseñes tanto que puedan prescindir de ti.",
    category: "relationships"
  },
  {
    number: 12,
    title: "Utiliza la honestidad selectiva y la generosidad para desarmar a tu víctima",
    subtitle: "Un acto sincero de honestidad puede cubrir docenas de engaños",
    description: "Un gesto sincero y honesto puede derribar la guardia de los más suspicaces. Una vez que tu honestidad selectiva abra una brecha, podrás engañar y manipular a tu antojo.",
    category: "deception"
  },
  {
    number: 13,
    title: "Al pedir ayuda, apela al interés propio de la gente",
    subtitle: "Si necesitas pedir ayuda, no apeles a la gratitud o compasión",
    description: "Si necesitas la ayuda de alguien, no le recuerdes tus favores pasados. En cambio, muéstrale algo en tu petición que beneficiará sus propios intereses. Responderá con entusiasmo.",
    category: "strategy"
  },
  {
    number: 14,
    title: "Muéstrate como amigo, actúa como espía",
    subtitle: "Conocer a tu rival es fundamental",
    description: "Saber sobre tu rival es fundamental. Usa espías para reunir información valiosa. Mejor aún, actúa tú mismo como espía. En conversaciones amigables, haz preguntas indirectas.",
    category: "deception"
  },
  {
    number: 15,
    title: "Aplasta totalmente a tu enemigo",
    subtitle: "Más se perdió por moderación que por exceso",
    description: "Todos los grandes líderes lo saben: un enemigo aplastado a medias se recuperará y buscará venganza. Debes aniquilarlo completamente. No dejes ascuas que puedan volver a encenderse.",
    category: "strategy"
  },
  {
    number: 16,
    title: "Usa la ausencia para incrementar el respeto y el honor",
    subtitle: "Demasiada circulación te devalúa",
    description: "Cuanto más te vean y escuchen, más común parecerás. Si ya estás establecido en un grupo, retirarte temporalmente te hará más admirado. Crea valor a través de la escasez.",
    category: "reputation"
  },
  {
    number: 17,
    title: "Mantén a los demás en suspenso cultivando un aire de imprevisibilidad",
    subtitle: "Los seres humanos somos criaturas de hábito",
    description: "Actúa de forma impredecible. El comportamiento impredecible mantendrá a los demás fuera de equilibrio. Llevada al extremo, esta estrategia puede intimidar y aterrorizar.",
    category: "deception"
  },
  {
    number: 18,
    title: "No construyas fortalezas para protegerte, el aislamiento es peligroso",
    subtitle: "El mundo es peligroso, pero el aislamiento lo es más",
    description: "Todos buscan protegerse aislándose. Pero el aislamiento te expone a más peligros de los que te protege. Es mejor circular entre la gente, encontrar aliados y descubrir enemigos.",
    category: "strategy"
  },
  {
    number: 19,
    title: "Conoce con quién tratas, no ofendas a la persona equivocada",
    subtitle: "Hay muchos tipos de personas, y cada una reacciona diferente",
    description: "Nunca asumas que la persona con la que tratas es más débil o menos importante de lo que parece. Hay quienes se vengarán a toda costa. Elige cuidadosamente a tus víctimas y oponentes.",
    category: "relationships"
  },
  {
    number: 20,
    title: "No te comprometas con nadie",
    subtitle: "Los tontos se apresuran a elegir bandos",
    description: "No te comprometas con ningún bando o causa más que contigo mismo. Manteniendo tu independencia, te conviertes en el amo de otros, enfrentando a las personas entre sí.",
    category: "self-mastery"
  },
  {
    number: 21,
    title: "Finge candidez para atrapar a los cándidos",
    subtitle: "Nadie gusta de sentirse más estúpido que los demás",
    description: "Haz que tus víctimas se sientan más inteligentes que tú. Una vez convencidos de esto, nunca sospecharán que tienes motivos ulteriores.",
    category: "deception"
  },
  {
    number: 22,
    title: "Usa la táctica de la rendición para ganar poder",
    subtitle: "Rendirse puede ser una herramienta de poder",
    description: "Cuando seas más débil, nunca luches solo por honor. Elige la rendición. Te dará tiempo para recuperarte, tiempo para esperar a que el poder de tu conquistador decline.",
    category: "timing"
  },
  {
    number: 23,
    title: "Concentra tus fuerzas",
    subtitle: "Conserva tus fuerzas y energía manteniéndolas concentradas",
    description: "No desperdicies recursos tratando de estar en todas partes. Encuentra la fuente de poder, la mina de oro que te hará rico. Golpea el petróleo y para de cavar.",
    category: "strategy"
  },
  {
    number: 24,
    title: "Juega el papel del cortesano perfecto",
    subtitle: "El cortesano prospera en un mundo donde todo gira alrededor del poder",
    description: "El cortesano perfecto domina el arte de la indirección; halaga, cede ante sus superiores y ejerce poder sobre los demás de la manera más oblicua y gentil.",
    category: "relationships"
  },
  {
    number: 25,
    title: "Procura recrearte permanentemente",
    subtitle: "No aceptes los roles que la sociedad te impone",
    description: "No aceptes el papel que te asigna la sociedad. Forja tu propia identidad, una que capte la atención y nunca aburra. Sé el dueño de tu imagen en lugar de dejar que otros la definan.",
    category: "self-mastery"
  },
  {
    number: 26,
    title: "Mantén tus manos limpias",
    subtitle: "Nunca parezcas manchado por errores o actos desagradables",
    description: "Debes parecer un modelo de civilidad y eficiencia. Tus manos nunca deben ensuciarse. Usa a otros como chivos expiatorios para disfrazar tu participación.",
    category: "reputation"
  },
  {
    number: 27,
    title: "Juega con la necesidad de la gente de creer para crear un culto",
    subtitle: "La gente tiene una abrumadora necesidad de creer en algo",
    description: "Las personas quieren desesperadamente creer en algo. Conviértete en el punto focal de tal deseo ofreciéndoles una causa, una nueva fe para seguir. Sé vago pero prometedor.",
    category: "deception"
  },
  {
    number: 28,
    title: "Actúa con audacia",
    subtitle: "Si no estás seguro de algo, no lo hagas",
    description: "La timidez es peligrosa. Cualquier error que cometas a través de la audacia se corrige fácilmente con más audacia. Todos admiran al audaz; nadie honra al tímido.",
    category: "self-mastery"
  },
  {
    number: 29,
    title: "Planifica todo el camino hasta el final",
    subtitle: "El final lo es todo",
    description: "Planifica hasta el final. No te dejes llevar por deseos y sueños vagos. Al planificar hasta el final, no te abrumarán las circunstancias y sabrás cuándo parar.",
    category: "strategy"
  },
  {
    number: 30,
    title: "Haz que tus logros parezcan no requerir esfuerzo",
    subtitle: "Tu acción debe parecer natural y ejecutada con facilidad",
    description: "Tus acciones deben parecer naturales y ejecutadas con facilidad. Todo el trabajo duro y la práctica que implican deben ocultarse. Cuando actúes, hazlo sin esfuerzo, como si pudieras hacer mucho más.",
    category: "reputation"
  },
  {
    number: 31,
    title: "Controla las opciones, haz que otros jueguen con las cartas que tú repartes",
    subtitle: "Los mejores engaños parecen dar opciones a la otra persona",
    description: "Dale a las personas opciones que te favorezcan sin importar cuál elijan. Fuérzalos a elegir entre dos males, ambos sirviendo a tu propósito. Ponlos en dilemas de los que no puedan escapar.",
    category: "deception"
  },
  {
    number: 32,
    title: "Juega con las fantasías de la gente",
    subtitle: "La verdad suele ser evitada porque es fea y desagradable",
    description: "La vida es tan dura y perturbadora que las personas que pueden fabricar romance o conjurar fantasías son como oasis en el desierto. Nunca apeles a la verdad, sino a las fantasías de las masas.",
    category: "deception"
  },
  {
    number: 33,
    title: "Descubre el talón de Aquiles de cada persona",
    subtitle: "Todos tienen una debilidad, una brecha en la muralla",
    description: "Todos tienen una debilidad, un botón que una vez presionado, los hará actuar. Encuentra ese punto débil. Puede ser una inseguridad, una emoción incontrolable, un deseo secreto.",
    category: "strategy"
  },
  {
    number: 34,
    title: "Actúa como un rey para ser tratado como tal",
    subtitle: "La forma en que te presentas determinará cómo te tratan",
    description: "La forma en que te comportas a menudo determinará cómo te tratan. Si actúas como rey, serás tratado como uno. Exige respeto y lo recibirás. Sé tu propio monarca.",
    category: "self-mastery"
  },
  {
    number: 35,
    title: "Domina el arte del timing",
    subtitle: "Nunca parezcas tener prisa, la paciencia es una virtud",
    description: "Nunca parezcas tener prisa. Detecta el espíritu de los tiempos y las tendencias que te llevarán al poder. Aprende a retroceder cuando el tiempo aún no está maduro, y a golpear cuando llegue el momento.",
    category: "timing"
  },
  {
    number: 36,
    title: "Desprecia las cosas que no puedes tener",
    subtitle: "Ignorar es la mejor venganza",
    description: "Al reconocer un problema menor, le das existencia y credibilidad. Cuanta más atención prestes a un enemigo, más fuerte lo haces. A veces es mejor dejar las cosas en paz.",
    category: "self-mastery"
  },
  {
    number: 37,
    title: "Crea espectáculos atractivos",
    subtitle: "Las imágenes llamativas y los gestos simbólicos crean el aura de poder",
    description: "Imágenes llamativas y gestos simbólicos crean un aura de poder. Organiza espectáculos para los que te rodean, llenos de imágenes radiantes y símbolos. Deslumbra con la apariencia, no con los hechos.",
    category: "reputation"
  },
  {
    number: 38,
    title: "Piensa como quieras pero compórtate como los demás",
    subtitle: "Si haces alarde de ir contra la corriente, la gente pensará que solo buscas atención",
    description: "Si haces alarde de tus ideas no convencionales, la gente pensará que solo buscas atención. Mezcla, nutre al espíritu libre interior, pero exteriormente adopta los caminos de la mayoría.",
    category: "self-mastery"
  },
  {
    number: 39,
    title: "Revuelve las aguas para pescar",
    subtitle: "La ira y la emoción son contraproducentes",
    description: "La ira y la emoción son estratégicamente contraproducentes. Debes estar siempre calmado y objetivo. Pero si puedes hacer enojar a tus enemigos mientras permaneces calmado, ganarás una ventaja.",
    category: "strategy"
  },
  {
    number: 40,
    title: "Desprecia la comida gratis",
    subtitle: "Lo que se ofrece gratis es peligroso",
    description: "Lo que se ofrece gratis es peligroso. Siempre hay trampas ocultas. Lo que vale tiene precio. Pagando tu camino, te mantienes libre de gratitudes, culpas y engaños.",
    category: "self-mastery"
  },
  {
    number: 41,
    title: "Evita seguir los pasos de un gran hombre",
    subtitle: "Lo que ocurre primero siempre parece mejor",
    description: "Lo que ocurre primero siempre parece más original que lo que viene después. Si sucedes a un gran hombre, tendrás que lograr el doble para eclipsarlo. Establece tu propio nombre y camino.",
    category: "reputation"
  },
  {
    number: 42,
    title: "Golpea al pastor y se dispersarán las ovejas",
    subtitle: "Los problemas a menudo tienen su origen en un solo individuo",
    description: "Los problemas pueden rastrearse hasta un solo individuo fuerte, el agitador. No negocies, neutralízalo. Encuentra la fuente del problema y golpéala. Las ovejas se dispersarán.",
    category: "strategy"
  },
  {
    number: 43,
    title: "Trabaja sobre el corazón y la mente de los demás",
    subtitle: "La coerción crea una reacción que eventualmente trabaja contra ti",
    description: "La coerción crea una reacción que eventualmente trabajará en tu contra. Debes seducir a los demás para que quieran moverse en tu dirección. Seduce apelando a sus emociones.",
    category: "relationships"
  },
  {
    number: 44,
    title: "Desarma y enfurece con el efecto espejo",
    subtitle: "El espejo refleja la realidad pero también es la herramienta perfecta para el engaño",
    description: "Cuando imitas a tus enemigos, los confundes. El Efecto Espejo los burla y humilla. Usan su propia estrategia contra ellos mismos. Sostén un espejo frente a sus psiques.",
    category: "deception"
  },
  {
    number: 45,
    title: "Predica la necesidad de cambio pero nunca reformes demasiado a la vez",
    subtitle: "Todos entienden la necesidad de cambio, pero el cambio es traumático",
    description: "Todos entienden la necesidad de cambio en abstracto, pero a nivel cotidiano son criaturas de hábito. Mucho cambio es traumático. Haz que el cambio se sienta como una mejora suave del pasado.",
    category: "timing"
  },
  {
    number: 46,
    title: "Nunca parezcas demasiado perfecto",
    subtitle: "Parecer mejor que los demás es peligroso",
    description: "Parecer mejor que los demás es siempre peligroso, pero más peligroso aún es parecer que no tienes defectos. La envidia crea enemigos silenciosos. Muestra defectos inofensivos ocasionalmente.",
    category: "reputation"
  },
  {
    number: 47,
    title: "No vayas más allá de tu objetivo original, aprende a parar cuando ganes",
    subtitle: "El momento de la victoria es a menudo el de mayor peligro",
    description: "El momento de la victoria es a menudo el momento de mayor peligro. En el calor de la victoria, la arrogancia puede empujarte más allá de tu meta original. No dejes que el éxito se te suba a la cabeza.",
    category: "timing"
  },
  {
    number: 48,
    title: "Sé cambiante en tu forma",
    subtitle: "Al tomar una forma, al tener un plan visible, te abres al ataque",
    description: "Al tomar una forma visible, te abres al ataque. En lugar de tomar una forma que tu enemigo pueda captar, mantente adaptable y en movimiento. Acepta que nada es seguro y ninguna ley es fija.",
    category: "strategy"
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
