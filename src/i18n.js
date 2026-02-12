// Translation system
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Our Story',
    'nav.details': 'Details',
    'nav.gallery': 'Gallery',
    'nav.gifts': 'Gifts',
    'nav.faq': 'Q&A',

    // Hero
    'hero.tagline': "We're Getting Married",

    // Our Story
    'story.title': 'Our Story',
    'story.ch1.title': 'It Started with Puppies',
    'story.ch1.p1': "Juscelia was working like any other day when she came across a Snapchat post advertising Golden Retriever puppies for sale. Her sister, Cimeia, and close friend, Bruna, had been wanting a dog for quite some time. When Juscelia saw the post, she immediately showed it to them. Bruna instantly fell in love with the photos and asked for the seller's contact information.",
    'story.ch1.p2': 'Juscelia added Elio on Snapchat and asked Elio for his number to help facilitate the purchase. After Bruna and Bruno met Elio to pick up the puppy, they called Juscelia that Elio seemed like a nice guy and that she should meet him herself.',
    'story.ch2.title': 'Three Signs',
    'story.ch2.p1': "Not long after, when Cimeia saw Bruna's puppy, she decided she wanted one too. Busy with work, Juscelia asked her friend Viviana to call on their behalf. Viviana and Elio spoke briefly about the dog, and shortly after hanging up, Viviana called Juscelia back. She wasn't quite sure why, but she had a strong feeling that Juscelia should meet Elio as well.",
    'story.ch2.p2': 'Now hearing the same suggestion from three different people, Juscelia told her sister she would pick up the puppy for her. She got in her car and drove an hour and a half to do so.',
    'story.ch3.title': 'The First Meeting',
    'story.ch3.p1': 'Seeing Juscelia for the first time, Elio was immediately taken and tried to strike up a conversation. Despite several attempts, all he received were polite nods and a quiet "thank you" for the dog. Elio assumed she wasn\'t interested and that was the end of the story.',
    'story.ch3.p2': 'Or so he thought.',
    'story.ch4.title': 'A Connection Grows',
    'story.ch4.p1': 'About a week later, Juscelia began sending update photos of the puppies. Over the course of four months, conversations about the dogs slowly turned into casual chats, casual chats grew into genuine connection, and that connection blossomed into mutual interest, eventually leading to their first date.',
    'story.ch4.p2': 'Juscelia flew to Virginia Beach to properly meet Elio this time. Over three days, they shared meals, went shooting, explored the area, and spent hours watching movies together. When the trip came to an end they both returned to their busy lives. Now separated by 600 miles, but neither was ready for it to end.',
    'story.ch5.title': '600 Miles Apart',
    'story.ch5.p1': 'Trip after trip followed, with Juscelia traveling to Virginia and Elio traveling to Massachusetts. Within months, they planned a trip to Puerto Rico to ring in the New Year together.',
    'story.ch5.p2': "Like many love stories, the journey wasn't always simple. Through distance, challenges, and moments of uncertainty, their love continued to grow. Shaped by two people willing to take a leap of faith, trust the unknown, and choose each other. That leap ultimately formed the foundation of the family they share today.",
    'story.ch6.title': 'The Proposal',
    'story.ch6.p1': 'On April 16, 2024, Elio proposed to Juscelia in San Diego, California, overlooking the breathtaking ocean cliffs at La Jolla Cove.',
    'story.ch6.p2': 'Juscelia joyfully said yes, and now they are counting down the days until they walk down the aisle and say, "I do."',
    'story.video': 'Watch the moment she said yes',

    // Details
    'details.title': 'Wedding Details',
    'details.ceremony': 'Ceremony',
    'details.ceremony.note': 'Please be seated by 5:00 PM',
    'details.cocktail': 'Cocktail Hour',
    'details.cocktail.note': "Drinks & hors d'oeuvres",
    'details.reception': 'Reception',
    'details.reception.note': 'Dinner, dancing & celebration',
    'details.dresscode': 'Dress Code',
    'details.dresscode.text': 'Black Formal / Cocktail Attire',

    // Quote
    'quote': '"Two souls, one heart"',

    // Gallery
    'gallery.title': 'Our Gallery',

    // RSVP
    'rsvp.intro': "Please let us know if you'll be joining us on our special day.",
    'rsvp.name': 'Full Name',
    'rsvp.name.placeholder': 'Your name',
    'rsvp.attend': 'Can you attend?',
    'rsvp.accept': 'Joyfully Accept',
    'rsvp.decline': 'Regretfully Decline',
    'rsvp.guests': 'How many guests will be attending?',
    'rsvp.names': 'Names of people attending',
    'rsvp.names.placeholder': 'List the names of all guests attending...',
    'rsvp.comments': 'Comments or questions',
    'rsvp.comments.placeholder': 'Any comments or questions...',
    'rsvp.submit': 'Send RSVP',

    // Gifts
    'gifts.title': 'Gifts',
    'gifts.intro': 'Your presence at our wedding is truly the greatest gift to us. For those who wish to contribute in another way, we would be sincerely grateful for any support toward our honeymoon. These contributions will help us create lasting memories as we begin this next chapter together.',
    'gifts.honeymoon': 'Honeymoon Fund',
    'gifts.venmo': 'Venmo',
    'gifts.cashapp': 'Cash App',
    'gifts.applepay': 'Apple Pay',
    'gifts.note': 'Gifts are also welcome at the venue on the day of the wedding.',

    // FAQ
    'faq.title': 'Questions?',
    'faq.logistics': 'Logistics',
    'faq.q1': 'What time should I arrive?',
    'faq.a1': 'Please arrive by 4:30 to ensure that everyone is seated and ready for the ceremony to commence at 5:00 pm.',
    'faq.q2': 'Where do I park?',
    'faq.a2': 'There is adequate parking at the venue and there will be a worker present to assist you with parking instructions upon arrival.',
    'faq.q3': 'Is the venue wheelchair accessible?',
    'faq.a3': 'The venue is wheelchair accessible. If assistance is needed to accommodate a handicap please message Elio and Juscelia to coordinate.',
    'faq.q4': 'Will there be transportation between ceremony and reception?',
    'faq.a4': 'The ceremony, cocktail hour, and reception are at the same location and will not require transportation.',
    'faq.dresscode': 'Dress Code',
    'faq.q5': 'What should I wear?',
    'faq.a5': 'The dress code will be Black Formal/Cocktail attire for all guests. Men wearing a black suit jacket may also wear a white undershirt. Please ensure all guests attending dress accordingly.',
    'faq.q6': 'Is it outdoors? Should I bring layers or wear certain shoes?',
    'faq.a6': 'Ceremony and cocktail hour will both be outdoor. We recommend dressing appropriately for the weather.',
    'faq.guests': 'Guests & Plus-Ones',
    'faq.q7': 'Can I bring a date?',
    'faq.a7': 'Only dates that are on the guest list.',
    'faq.q8': 'Are children welcome?',
    'faq.a8': 'To allow all wedding guests a night of relaxation and celebration, we respectfully ask that no children attend the event. If you require bringing children to attend please mention beforehand to Elio and Juscelia to accommodate.',
    'faq.q9': 'Can I bring a guest not listed on my invitation?',
    'faq.a9': 'No, if there is a change in who the guest attending with you is please inform Elio and Juscelia prior.',
    'faq.food': 'Food & Drink',
    'faq.q10': 'Will there be vegetarian/vegan options?',
    'faq.a10': 'Yes, please let Elio and Juscelia know at least 2 weeks prior to the wedding to ensure accommodations could be met for a vegetarian/vegan option.',
    'faq.q11': 'Is there an open bar?',
    'faq.a11': 'No, cash and card could be used at the venue to purchase beverages.',
    'faq.q12': 'Can you accommodate allergies?',
    'faq.a12': 'Yes, please let Elio and Juscelia know at least 2 weeks prior to the wedding with the specific allergy to accommodate for.',
    'faq.q13': 'Can I bring a gift to the venue?',
    'faq.a13': 'Absolutely, guests are welcome to bring gifts to the venue. While your presence is truly the greatest gift to us, for those who wish to contribute in another way, we would be sincerely grateful for any support toward our honeymoon. These contributions will help us create lasting memories as we begin this next chapter together. Of course, any gift is appreciated, and we thank you for celebrating with us in whatever way feels most meaningful to you.',
    'faq.photos': 'Photos & Social',
    'faq.q14': 'Is this an unplugged ceremony?',
    'faq.a14': 'Feel free to record during the ceremony, as long as you are not obstructing the view for other guests present.',
    'faq.q15': "What's the wedding hashtag?",
    'faq.still': 'Still have questions?',
    'faq.contact': 'Contact Elio or Juscelia directly',

    // Footer
    'footer.made': 'Made with love'
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.story': 'Nossa História',
    'nav.details': 'Detalhes',
    'nav.gallery': 'Galeria',
    'nav.gifts': 'Presentes',
    'nav.faq': 'Perguntas',

    // Hero
    'hero.tagline': 'Vamos Nos Casar',

    // Our Story
    'story.title': 'Nossa História',
    'story.ch1.title': 'Tudo Começou com Filhotes',
    'story.ch1.p1': 'Juscelia estava trabalhando como em qualquer outro dia quando encontrou uma postagem no Snapchat anunciando filhotes de Golden Retriever à venda. Sua irmã, Cimeia, e sua amiga próxima, Bruna, queriam um cachorro há algum tempo. Quando Juscelia viu a postagem, mostrou imediatamente para elas. Bruna se apaixonou pelas fotos instantaneamente e pediu o contato do vendedor.',
    'story.ch1.p2': 'Juscelia adicionou Elio no Snapchat e pediu o número dele para facilitar a compra. Depois que Bruna e Bruno conheceram Elio para pegar o filhote, ligaram para Juscelia dizendo que Elio parecia ser um cara legal e que ela deveria conhecê-lo.',
    'story.ch2.title': 'Três Sinais',
    'story.ch2.p1': 'Pouco tempo depois, quando Cimeia viu o filhote da Bruna, decidiu que também queria um. Ocupada com o trabalho, Juscelia pediu à amiga Viviana para ligar em nome delas. Viviana e Elio conversaram brevemente sobre o cachorro e, logo após desligar, Viviana ligou de volta para Juscelia. Ela não sabia bem por quê, mas tinha um forte pressentimento de que Juscelia deveria conhecer Elio também.',
    'story.ch2.p2': 'Agora ouvindo a mesma sugestão de três pessoas diferentes, Juscelia disse à irmã que buscaria o filhote para ela. Entrou no carro e dirigiu uma hora e meia para isso.',
    'story.ch3.title': 'O Primeiro Encontro',
    'story.ch3.p1': 'Ao ver Juscelia pela primeira vez, Elio ficou imediatamente encantado e tentou puxar conversa. Apesar de várias tentativas, tudo o que recebeu foram acenos educados e um "obrigada" discreto pelo cachorro. Elio achou que ela não estava interessada e que a história tinha terminado.',
    'story.ch3.p2': 'Ou assim ele pensou.',
    'story.ch4.title': 'Uma Conexão Cresce',
    'story.ch4.p1': 'Cerca de uma semana depois, Juscelia começou a enviar fotos atualizadas dos filhotes. Ao longo de quatro meses, conversas sobre os cachorros se transformaram em conversas casuais, conversas casuais cresceram em uma conexão genuína, e essa conexão floresceu em interesse mútuo, eventualmente levando ao primeiro encontro.',
    'story.ch4.p2': 'Juscelia voou para Virginia Beach para conhecer Elio adequadamente desta vez. Durante três dias, compartilharam refeições, foram ao tiro, exploraram a região e passaram horas assistindo filmes juntos. Quando a viagem chegou ao fim, ambos voltaram às suas vidas ocupadas. Agora separados por 960 km, mas nenhum dos dois estava pronto para acabar.',
    'story.ch5.title': '960 Quilômetros de Distância',
    'story.ch5.p1': 'Viagem após viagem se seguiram, com Juscelia viajando para Virginia e Elio viajando para Massachusetts. Em poucos meses, planejaram uma viagem a Porto Rico para celebrar o Ano Novo juntos.',
    'story.ch5.p2': 'Como muitas histórias de amor, a jornada nem sempre foi simples. Através da distância, desafios e momentos de incerteza, o amor deles continuou a crescer. Moldado por duas pessoas dispostas a dar um salto de fé, confiar no desconhecido e escolher um ao outro. Esse salto formou a base da família que compartilham hoje.',
    'story.ch6.title': 'O Pedido',
    'story.ch6.p1': 'Em 16 de abril de 2024, Elio pediu Juscelia em casamento em San Diego, Califórnia, com vista para as deslumbrantes falésias oceânicas de La Jolla Cove.',
    'story.ch6.p2': 'Juscelia alegremente disse sim, e agora eles estão contando os dias até caminharem pelo altar e dizerem "sim".',
    'story.video': 'Assista ao momento em que ela disse sim',

    // Details
    'details.title': 'Detalhes do Casamento',
    'details.ceremony': 'Cerimônia',
    'details.ceremony.note': 'Por favor, estejam sentados até 17:00',
    'details.cocktail': 'Coquetel',
    'details.cocktail.note': 'Bebidas e aperitivos',
    'details.reception': 'Recepção',
    'details.reception.note': 'Jantar, dança e celebração',
    'details.dresscode': 'Traje',
    'details.dresscode.text': 'Traje Social / Coquetel Preto',

    // Quote
    'quote': '"Duas almas, um coração"',

    // Gallery
    'gallery.title': 'Nossa Galeria',

    // RSVP
    'rsvp.intro': 'Por favor, nos avise se você estará conosco neste dia especial.',
    'rsvp.name': 'Nome Completo',
    'rsvp.name.placeholder': 'Seu nome',
    'rsvp.attend': 'Você pode comparecer?',
    'rsvp.accept': 'Aceito com Alegria',
    'rsvp.decline': 'Infelizmente Não Poderei',
    'rsvp.guests': 'Quantos convidados irão comparecer?',
    'rsvp.names': 'Nomes das pessoas que irão comparecer',
    'rsvp.names.placeholder': 'Liste os nomes de todos os convidados...',
    'rsvp.comments': 'Comentários ou perguntas',
    'rsvp.comments.placeholder': 'Algum comentário ou pergunta...',
    'rsvp.submit': 'Enviar RSVP',

    // Gifts
    'gifts.title': 'Presentes',
    'gifts.intro': 'Sua presença em nosso casamento é verdadeiramente o maior presente para nós. Para aqueles que desejam contribuir de outra forma, ficaríamos sinceramente gratos por qualquer apoio para nossa lua de mel. Essas contribuições nos ajudarão a criar memórias duradouras enquanto começamos este novo capítulo juntos.',
    'gifts.honeymoon': 'Lua de Mel',
    'gifts.venmo': 'Venmo',
    'gifts.cashapp': 'Cash App',
    'gifts.applepay': 'Apple Pay',
    'gifts.note': 'Presentes também são bem-vindos no local no dia do casamento.',

    // FAQ
    'faq.title': 'Perguntas?',
    'faq.logistics': 'Logística',
    'faq.q1': 'Que horas devo chegar?',
    'faq.a1': 'Por favor, chegue às 16:30 para garantir que todos estejam sentados e prontos para a cerimônia começar às 17:00.',
    'faq.q2': 'Onde posso estacionar?',
    'faq.a2': 'Há estacionamento adequado no local e haverá um funcionário presente para auxiliar com as instruções de estacionamento na chegada.',
    'faq.q3': 'O local é acessível para cadeirantes?',
    'faq.a3': 'O local é acessível para cadeirantes. Se precisar de assistência para acomodar alguma necessidade especial, entre em contato com Elio e Juscelia para coordenar.',
    'faq.q4': 'Haverá transporte entre a cerimônia e a recepção?',
    'faq.a4': 'A cerimônia, coquetel e recepção serão no mesmo local e não será necessário transporte.',
    'faq.dresscode': 'Traje',
    'faq.q5': 'O que devo vestir?',
    'faq.a5': 'O traje será Social/Coquetel Preto para todos os convidados. Homens usando paletó preto também podem usar camisa branca por baixo. Por favor, certifique-se de que todos os convidados compareçam vestidos adequadamente.',
    'faq.q6': 'Será ao ar livre? Devo levar casacos ou usar certos sapatos?',
    'faq.a6': 'A cerimônia e o coquetel serão ao ar livre. Recomendamos vestir-se apropriadamente para o clima.',
    'faq.guests': 'Convidados e Acompanhantes',
    'faq.q7': 'Posso levar um acompanhante?',
    'faq.a7': 'Apenas acompanhantes que estão na lista de convidados.',
    'faq.q8': 'Crianças são bem-vindas?',
    'faq.a8': 'Para permitir a todos os convidados uma noite de relaxamento e celebração, pedimos respeitosamente que crianças não compareçam ao evento. Se precisar trazer crianças, mencione previamente a Elio e Juscelia para acomodação.',
    'faq.q9': 'Posso trazer um convidado que não está no meu convite?',
    'faq.a9': 'Não, se houver mudança em quem irá acompanhá-lo, informe Elio e Juscelia com antecedência.',
    'faq.food': 'Comida e Bebida',
    'faq.q10': 'Haverá opções vegetarianas/veganas?',
    'faq.a10': 'Sim, informe Elio e Juscelia com pelo menos 2 semanas de antecedência do casamento para garantir que as acomodações possam ser feitas para opções vegetarianas/veganas.',
    'faq.q11': 'Haverá open bar?',
    'faq.a11': 'Não, dinheiro e cartão podem ser usados no local para comprar bebidas.',
    'faq.q12': 'Vocês podem acomodar alergias?',
    'faq.a12': 'Sim, informe Elio e Juscelia com pelo menos 2 semanas de antecedência do casamento com a alergia específica a ser acomodada.',
    'faq.q13': 'Posso levar um presente para o local?',
    'faq.a13': 'Com certeza, os convidados são bem-vindos a trazer presentes para o local. Embora sua presença seja verdadeiramente o maior presente para nós, para aqueles que desejam contribuir de outra forma, ficaríamos sinceramente gratos por qualquer apoio para nossa lua de mel. Essas contribuições nos ajudarão a criar memórias duradouras enquanto começamos este novo capítulo juntos. Claro, qualquer presente é apreciado, e agradecemos por celebrar conosco da maneira que for mais significativa para você.',
    'faq.photos': 'Fotos e Redes Sociais',
    'faq.q14': 'É uma cerimônia sem celulares?',
    'faq.a14': 'Fique à vontade para gravar durante a cerimônia, desde que não esteja obstruindo a visão de outros convidados.',
    'faq.q15': 'Qual é a hashtag do casamento?',
    'faq.still': 'Ainda tem perguntas?',
    'faq.contact': 'Entre em contato com Elio ou Juscelia diretamente',

    // Footer
    'footer.made': 'Feito com amor'
  }
}

let currentLang = 'en'

export function setLanguage(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (translations[lang][key]) {
      el.textContent = translations[lang][key]
    }
  })

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key]
    }
  })

  // Update language toggle buttons
  const newLang = lang === 'en' ? 'Português' : 'English'
  document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
    btn.textContent = newLang
  })

  // Save preference
  localStorage.setItem('lang', lang)
}

export function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'pt' : 'en')
}

export function initI18n() {
  // Check for saved preference
  const saved = localStorage.getItem('lang')
  if (saved && (saved === 'en' || saved === 'pt')) {
    if (saved !== 'en') {
      setLanguage(saved)
    }
  }

  // Add click handlers
  document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', toggleLanguage)
  })
}
