// ==========================================
// 1. CENTRALISATION DU COMPTE RENDU DE DONNÉES
// ==========================================
const PROJECTS = [
  // ------------------------------------------
  // PROJETS BUT 2
  // ------------------------------------------
  {
    slug: 'site-web-dynamique-opendata',
    title: 'Création d’un site web dynamique',
    periode: 'BUT 2',
    semester: 'BUT 1',
    date: '2023-05-15',
    note: '14/20',
    teamSize: 3,
    accent: 'linear-gradient(135deg, #6db1ff, #4a8fe2)',
    image: '../picture/PhotosProjets/Ordiginal.png',
    summary: 'Développement d’une application web dynamique autour d’un jeu de données OpenData, avec base MySQL, PHP, JavaScript et tableau de bord.',
    detailsHtml: `
      <p>Objectif : réaliser un site web entièrement dynamique en choisissant un thème libre, basé sur un jeu de données provenant de l’OpenData. Il s’agissait de concevoir un diagramme UML, de créer une base de données relationnelle avec MySQL, de développer un site web en HTML et CSS, d’utiliser PHP pour la gestion des formulaires, et d’intégrer du JavaScript pour mettre en place un tableau de bord.</p>

      <h3>Présentation du projet</h3>
      <p>Dans ce projet, nous devions choisir un thème ainsi qu’une base de données OpenData. Nous avons opté pour une application web dédiée aux ordinateurs, destinée à aider les utilisateurs indécis dans leur choix. L’application permet également de consulter les avis des clients ayant déjà acheté un ordinateur, ainsi que d’identifier les modèles les plus populaires via une page de statistiques.</p>

      <p>Ne trouvant pas de base OpenData adaptée, nous avons créé nous-mêmes la base de données, composée de quatre tables : <strong>ordi</strong>, <strong>client</strong>, <strong>commande</strong> et <strong>avis</strong>. Ces tables ont ensuite été importées dans MySQL via easyPHPMyAdmin.</p>

      <h3>Fonctionnalités développées</h3>
      <p>Le site web se divise en deux parties : une interface utilisateur et une interface professionnelle réservée aux gestionnaires du site. Du côté des utilisateurs, la page d’accueil permet d’accéder à un onglet “Recherche” proposant un formulaire de sélection, qui suggère des modèles d’ordinateurs selon les critères renseignés, à la manière d’un filtre.</p>

      <p>Les autres onglets présentent les modalités de commande, un formulaire pour laisser un avis, et une page “Statistiques” affichant, grâce à des graphiques jQuery, le nombre de commandes mensuelles et le taux de satisfaction client.</p>

      <p>Pour la partie professionnelle, accessible via un système de connexion sécurisé, nous avons créé une table <strong>utilisateur</strong> pour gérer les identifiants et mots de passe. Cette interface permet d’ajouter, modifier ou supprimer des enregistrements dans les tables <strong>client</strong>, <strong>ordi</strong> et <strong>commande</strong>.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>J’ai renforcé mes connaissances en modélisation de données grâce à la conception d’un diagramme UML et à la création d’une base de données relationnelle avec MySQL. J’ai également perfectionné mes compétences en développement web en utilisant HTML et CSS pour structurer et styliser le site, ainsi que PHP pour la gestion des formulaires et la connexion à la base de données.</p>

      <p>L’intégration de JavaScript et de jQuery m’a permis de créer un tableau de bord interactif et d’afficher des statistiques dynamiques. Par ailleurs, j’ai appris à organiser un projet de A à Z, en partant du choix du thème jusqu’à la rédaction d’un rapport final, en passant par la conception, le développement et les tests.</p>

      <p>Enfin, cette expérience m’a appris à mieux comprendre les enjeux de la gestion des droits d’accès, de la sécurité des utilisateurs et de la séparation entre les interfaces utilisateur et administrateur. Elle m’a aussi permis de travailler en autonomie tout en collaborant efficacement avec les membres de mon groupe.</p>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/S3/ORDIGINAL/rapport projet ordiginal.pdf',
        downloadName: 'rapport_projet_ordiginal.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Télécharger le code',
        href: '../Projets/S3/ORDIGINAL/code site ordiginal.zip',
        downloadName: 'code_site_ordiginal.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'besoins-territoire',
    title: 'Besoins du Territoire',
    periode: 'BUT 2',
    semester: 'S3',
    date: '2024-03-01',
    note: '16/20',
    teamSize: 4,
    accent: 'linear-gradient(135deg, #f6c26b, #f48fb1)',
    image: '../picture/PhotosProjets/datavizBesoinTerritoire.png',
    summary: 'Animation pédagogique pour initier une classe de 4e à la datavisualisation avec Excel.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>Excel</p>

      <h3>Description du projet</h3>
      <p>Ce projet a eu lieu au cours des semestres 3 et 4 : j'ai eu l'opportunité, en tant qu'étudiante, d'animer un projet pédagogique avec 3 de mes camarades auprès de la classe de 4eC du Collège Jean Zay, en collaboration avec Madame Lemesre. Ce projet visait à initier les élèves au Data Apprentissage à travers l'utilisation de l'outil Excel.</p>

      <p>Quatre séances ont été organisées : trois au collège et une à l'IUT, afin de leur faire découvrir les bases du traitement de données et les familiariser avec un environnement universitaire. J'ai conçu et animé des séances mêlant cours théoriques, exercices pratiques sur Excel, vidéos explicatives et quiz interactifs via Kahoot pour rendre l'apprentissage dynamique et accessible.</p>

      <p>En mars, le projet s'est conclu par un challenge de datavisualisation durant lequel les élèves ont travaillé en groupes pour analyser un jeu de données réel et créer des représentations graphiques pertinentes. Cette expérience m'a permis de transmettre mes connaissances de manière pédagogique tout en développant mes compétences en communication, en vulgarisation et en gestion de groupe.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m'a permis de développer des compétences précieuses en animation pédagogique, en vulgarisation et en communication orale. En concevant et animant des séances auprès d'élèves de 4e, j'ai appris à adapter mon discours, à rendre des notions techniques accessibles, et à maintenir l'attention d'un jeune public en diversifiant les supports (cours, exercices, quiz, vidéos).</p>

      <p>J'ai également renforcé mes compétences techniques en traitement de données avec Excel, notamment dans la création de graphiques lisibles et pertinents à partir de jeux de données réels. La préparation et l'animation du challenge de datavisualisation m'ont permis de mieux comprendre les enjeux de la représentation visuelle des données et de guider les élèves dans leur raisonnement analytique.</p>

      <p>Enfin, cette expérience m'a apporté une réelle confiance dans ma capacité à travailler en équipe, à organiser un projet éducatif et à prendre la parole devant un groupe, des qualités essentielles dans un contexte professionnel ou pédagogique.</p>
    `,
    resourceButtons: [
      {
        label: 'PPT du projet',
        href: '../Projets/S3/Besoins du territoires/PPT CHALLENGE DATAVIZ.pdf',
        downloadName: 'PPT_Challenge_DataViz.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Dossier du projet',
        href: '../Projets/S3/Besoins du territoires/Projet CHALLENGE DATAVIZ .zip',
        downloadName: 'Projet_Challenge_DataViz.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'echantillonnage-plans-experiences',
    title: 'Échantillonnage et plans d\'expériences',
    periode: 'BUT 2',
    semester: 'S4',
    date: '2024-05-10',
    note: '14.5/20',
    teamSize: 2,
    image: '../picture/PhotosProjets/ProjetR.png',
    accent: 'linear-gradient(135deg, #ff9a56, #ff7e3d)',
    summary: 'Optimiser la qualité perçue d\'une recette de cookies en identifiant les facteurs clés via un plan d\'expériences réduit.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>R, Excel</p>

      <h3>Description du projet</h3>
      <p>Ce projet vise à appliquer les principes des plans d'expériences pour identifier la recette optimale de cookies en fonction des préférences d'un jury de dégustation. Quatre facteurs influents ont été étudiés : la température du four, le type de pépites, le pourcentage de chocolat noir, et le temps de cuisson, chacun avec deux niveaux. L'objectif était de modéliser l'impact de ces facteurs (et de leurs interactions) sur la note attribuée aux cookies, tout en minimisant le nombre d'essais nécessaires.</p>

      <p>Le projet s'est déroulé en plusieurs étapes. Dans un premier temps, un plan factoriel simplifié à deux facteurs (température et temps) a été réalisé pour initier le jury et modéliser une première relation. Ce modèle a permis de visualiser l'effet des facteurs et leurs interactions à travers des surfaces de réponse et des courbes de niveaux, générées à l'aide du logiciel R. Ensuite, un plan factoriel complet à quatre facteurs (2⁴ = 16 expériences) a été théoriquement construit. Toutefois, pour limiter le nombre de dégustations à huit recettes, un plan fractionnaire 2⁴⁻¹ a été mis en œuvre. Cette approche permet de réduire les essais tout en conservant des résultats proches de ceux d'un plan complet.</p>

      <p>A l'aide de la matrice d'Hadamard et d'une analyse statistique (calculs des effets, des p-valeurs et de la variance), les facteurs significatifs ont été identifiés, et l'interaction jugée négligeable a été écartée. Un modèle prédictif optimal a ainsi été construit, permettant d'estimer les notes futures de nouvelles recettes. Le projet conclut que les plans d'expériences constituent une méthode rigoureuse, économique et efficace pour optimiser un processus ici, une recette culinaire et peuvent être généralisés à de nombreux autres domaines.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m'a permis de consolider mes compétences en statistiques et en analyse de données, notamment à travers la mise en œuvre de plans d'expériences factoriels et fractionnaires. En utilisant les logiciels R et Excel, j'ai appris à concevoir des protocoles d'échantillonnage efficaces, à collecter et organiser les données, puis à construire et interpréter des modèles statistiques prédictifs. Cette démarche m'a aussi sensibilisée à l'importance de l'optimisation des ressources en limitant le nombre d'essais tout en garantissant la fiabilité des résultats.</p>

      <p>J'ai développé une meilleure compréhension des interactions entre plusieurs facteurs influençant un phénomène complexe, ici la qualité perçue d'une recette de cookies, et j'ai acquis des compétences en modélisation qui peuvent être appliquées à d'autres domaines. Ce travail m'a également appris à formaliser rigoureusement une méthodologie expérimentale, à analyser des données quantitatives et à présenter des conclusions claires et argumentées.</p>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/S3/SAE cookie/rapport.pdf',
        downloadName: 'rapport_plans_experiences.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Dossier du projet',
        href: '../Projets/S3/SAE cookie/code sae cookie.zip',
        downloadName: 'projet_plans_experiences.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'etude-previsionnelle',
    title: 'Étude prévisionnelle',
    periode: 'BUT 2',
    semester: 'S4',
    date: '2024-06-12',
    note: '11.5/20',
    teamSize: 1,
    image: '../picture/PhotosProjets/SerieTemp.png',
    accent: 'linear-gradient(135deg, #9ac93f, #6ba52e)',
    summary: 'Analyse prévisionnelle des importations mensuelles d\'un pays membre de l\'OCDE à partir de données économiques réelles.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>Excel</p>

      <h3>Description du projet</h3>
      <p>Dans ce projet, j'analyse les importations mensuelles de l'Australie de 2000 à 2023 à partir des données de l'OCDE, en utilisant exclusivement Excel. J'effectue d'abord une analyse descriptive à l'aide de graphiques (courbes, boîtes à moustaches) pour identifier les tendances, les creux et les pics, ainsi que la saisonnalité des données. La saisonnalité étant d'ordre 12, je choisis un modèle additif, confirmé par la méthode de Buys-Ballot, qui permet d'isoler les composantes saisonnières indépendamment de la tendance.</p>

      <p>Plusieurs types de régression sont testés (linéaire, exponentielle, logarithmique, puissance…), et le modèle puissance est retenu comme le plus pertinent grâce à un R² de 0.83, indiquant une bonne qualité d'ajustement. J'en déduis ensuite la tendance et les coefficients saisonniers, que je combine pour ajuster la série initiale. À partir de cette série ajustée, je produis les prévisions mensuelles jusqu'à décembre 2025, et j'évalue la qualité des résultats en calculant la somme des erreurs quadratiques.</p>

      <p>L'ensemble des traitements, des calculs et des représentations graphiques ont été réalisés dans Excel à l'aide de fonctions avancées, de formules personnalisées, de tableaux croisés et de mises en forme conditionnelles. Ce travail me permet d'illustrer concrètement l'application d'une méthode de prévision en série temporelle à un cas économique réel. Il sert aussi à orienter les décisions stratégiques du pays concernant l'anticipation des stocks et la gestion de la dépendance commerciale.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m'a permis de renforcer mes compétences en analyse de séries temporelles et en modélisation prévisionnelle à l'aide d'Excel, en exploitant des données économiques réelles sur les importations mensuelles de l'Australie. J'ai appris à effectuer une analyse descriptive approfondie, à détecter et isoler la saisonnalité grâce à la méthode de Buys-Ballot, et à tester différents modèles de régression pour identifier celui offrant le meilleur ajustement statistique.</p>

      <p>Cette expérience m'a familiarisée avec la construction et l'ajustement de modèles additifs, ainsi qu'avec la production de prévisions à moyen terme. J'ai aussi développé des compétences avancées en manipulation d'Excel, utilisant fonctions, formules personnalisées, tableaux croisés dynamiques et mises en forme conditionnelles pour organise, visualiser et analyser les données de manière rigoureuse.</p>

      <p>Enfin, ce travail m'a sensibilisée à l'importance de la prévision économique pour guider les décisions stratégiques, notamment dans la gestion des stocks et des relations commerciales internationales.</p>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/S3/serie temp/rapport.pdf',
        downloadName: 'rapport_etude_previsionnelle.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Dossier du projet',
        href: '../Projets/S3/serie temp/projet.zip',
        downloadName: 'projet_etude_previsionnelle.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'expliquer-predire-variable-quantitative',
    title: 'Expliquer ou prédire une variable quantitative',
    periode: 'BUT 2',
    semester: 'S4',
    image: '../picture/PhotosProjets/ML.png',
    date: '2024-06-20',
    note: '15/20',
    teamSize: 2,
    accent: 'linear-gradient(135deg, #7aa7ff, #4f84e6)',
    summary: 'Construction d’un modèle de régression linéaire multiple pour prédire une variable quantitative à partir de données médicales.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>Jupyter, Python</p>

      <h3>Description du projet</h3>
      <p>Ce projet a pour objectif théorique de modéliser, à l’aide d’une régression linéaire multiple, la relation entre une variable quantitative cible, le diamètre d’une tumeur cancéreuse, et dix variables explicatives issues de tests médicaux, toutes extraites d’un jeu de données brut. La démarche adoptée repose sur les fondements du Machine Learning, visant à construire un modèle prédictif fiable et généralisable. Le processus a débuté par l’importation et le nettoyage des données, incluant la suppression des colonnes non pertinentes, le traitement des valeurs manquantes par remplacement par la médiane, ainsi qu’une analyse statistique approfondie. Une attention particulière a été portée à la gestion des valeurs extrêmes, explorée selon trois approches distinctes : la suppression, l’écrêtement et la conservation sans modification, chacune donnant lieu à une modélisation indépendante. Les données ont ensuite été normalisées par centrage et réduction afin de garantir une échelle homogène, puis divisées en ensembles d’apprentissage et de test pour évaluer les performances prédictives. Une validation croisée de type K-Fold a été utilisée pour mesurer la robustesse et la stabilité des modèles. Les résultats obtenus ont montré que le modèle issu de l’écrêtement offrait le meilleur compromis entre pouvoir explicatif et capacité de généralisation, faisant de lui le choix final pour la prédiction du diamètre tumoral. Ce projet illustre ainsi une démarche rigoureuse et méthodique d’apprentissage automatique, ancrée dans les standards actuels du Machine Learning.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m’a permis de renforcer mes compétences en modélisation statistique et apprentissage automatique, en particulier dans la construction de modèles de régression linéaire multiple à l’aide de Python dans un environnement Jupyter. J’ai appris à traiter des données brutes en réalisant un nettoyage rigoureux, incluant la gestion des valeurs manquantes et des valeurs extrêmes par différentes méthodes, ce qui m’a sensibilisée à l’importance de la qualité des données pour la performance des modèles. La normalisation des variables et la séparation en ensembles d’apprentissage et de test m’ont permis de comprendre les bonnes pratiques pour éviter le surapprentissage et garantir la robustesse des modèles. L’intégration de la validation croisée dans le processus d’évaluation a renforcé mes compétences en évaluation de performances et en généralisation des modèles. Ce projet m’a également donné une approche structurée et méthodique du Machine Learning, depuis le prétraitement des données jusqu’à la construction et l’évaluation de modèles prédictifs, compétences essentielles dans le domaine de la data science.</p>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/S4/Machine Learning VQ.pdf',
        downloadName: 'Machine_Learning_VQ.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Télécharger le code',
        href: '../Projets/S4/code ML VQ.zip',
        downloadName: 'code_ML_VQ.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'integration-data-warehouse',
    title: 'Intégration des données dans un data Warehouse',
    periode: 'BUT 2',
    semester: 'S4',
    date: '2024-06-18',
    note: '16.375/20',
    teamSize: 4,
    accent: 'linear-gradient(135deg, #ffa766, #ff7e3d)',
    image: '../picture/PhotosProjets/PBdatawarehousse.png',
    summary: 'Conception et alimentation d\'un entrepôt de données et création de dashboards Power BI pour l\'analyse des ventes.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>SQL, Python, Power BI</p>

      <h3>Description du projet</h3>
      <p>Ce projet porte sur l’analyse des données de SportOne, entreprise fictive spécialisée dans la vente d’articles de sport, en magasin et en ligne. L’objectif est double : concevoir un entrepôt de données à partir de fichiers hétérogènes (CSV, Excel, Access, texte) contenant des informations sur les ventes, clients, produits, fournisseurs et données géographiques, puis créer des tableaux de bord dynamiques avec Power BI pour visualiser les performances selon divers critères (géographie, temps, produits, clients). La première étape a consisté à nettoyer et transformer les données avec Python, en supprimant les incohérences et doublons pour les adapter à un modèle en étoile. Les données ont ensuite été chargées dans Oracle SQL Developer, avec plusieurs tables dimensionnelles (customer_dim, product_dim, organization_dim, geography_dim, time_dim) et une table de faits (order_fact). La dimension temporelle a été générée à partir des commandes en filtrant les dates valides et uniques. Une fois la base opérationnelle, l’équipe l’a connectée à Power BI pour produire des visualisations interactives facilitant l’identification des tendances et l’aide à la décision.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m'a permis d'acquérir des compétences solides en gestion et intégration de données en apprenant à transformer des données brutes issues de sources variées en un entrepôt de données structuré, facilitant ainsi leur analyse. J'ai développé mes capacités en nettoyage, préparation et modélisation de données à l'aide de SQL et de Python, ce qui m'a aidée à comprendre l'importance d'une organisation rigoureuse des données selon différents axes (temps, clients, produits, localisation). Par la suite, j'ai utilisé Power BI pour concevoir des tableaux de bord interactifs, ce qui m'a permis de maîtriser les techniques de visualisation avancée et d'analyse décisionnelle, en suivant les performances commerciales selon plusieurs critères. Ce projet m'a aussi sensibilisée à l'ensemble du processus de la gestion des données décisionnelles, de leur collecte à leur exploitation, tout en développant une approche méthodique et analytique essentielle pour tout métier lié à la data.</p>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/S4/projet S4/rapport.pdf',
        downloadName: 'rapport_integration_data_warehouse.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Télécharger le projet',
        href: '../Projets/S4/projet S4/projet.zip',
        downloadName: 'projet_S4_data_warehouse.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'reporting-analyse-multivariee',
    title: 'Reporting d\'une analyse multivariée',
    periode: 'BUT 2',
    semester: 'S4',
    date: '2024-06-25',
    note: '15/20',
    teamSize: 3,
    image: '../picture/PhotosProjets/projetShinny.png',
    accent: 'linear-gradient(135deg, #76b6ff, #2c7be5)',
    summary: 'Suivi automatisé et interactif de l\'évolution de la pauvreté en France via une application RShiny.',
    detailsHtml: `
      <h3>Langage et logiciel utilisés</h3>
      <p>R Shiny</p>

      <h3>Description du projet</h3>
      <p>Ce projet RShiny a pour objectif de créer une application web de suivi et d'analyse automatisée de la pauvreté en France métropolitaine, afin de faciliter la prise de décisions au niveau départemental et régional. Il s'inscrit dans un contexte où, en 2021, 14 % de la population vivait sous le seuil de pauvreté, avec une aggravation des inégalités depuis la crise sanitaire liée au COVID-19. L'application permettra d'identifier les départements les plus pauvres et les plus riches, tout en analysant les caractéristiques socio-économiques de leurs populations, telles que la répartition par âge, les familles monoparentales, les locataires, le niveau d'éducation, le type de logement, le taux d'imposition, les aides sociales, la démographie, les structures de santé, ainsi que le tissu économique et les infrastructures locales. Pour mieux comprendre ces disparités, une analyse multivariée (ACP, clustering, CAH, etc.) sera mise en œuvre afin de regrouper ou distinguer les départements selon leur niveau de vie. Ces résultats seront intégrés dans un tableau de bord interactif et ergonomique développé avec RShiny, offrant une visualisation claire et accessible des données. Cet outil facilitera le suivi-évaluation et l'aide à la décision pour les acteurs publics, en proposant notamment une classification automatique des départements basée sur les dynamiques socio-économiques observées entre 1970 et 2021.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet m'a permis de développer des compétences avancées en analyse multivariée et en visualisation de données interactives grâce à l'utilisation de R Shiny pour concevoir un tableau de bord automatisé et dynamique. J'ai appris à manipuler et à analyser des données socio-économiques complexes sur une longue période, en identifiant les relations entre différentes variables telles que l'éducation, le logement, les revenus et la démographie. La mise en œuvre d'une méthode de clustering m'a permis de regrouper des départements aux profils similaires, ce qui est un atout important pour orienter les politiques publiques. Ce projet m'a également familiarisée avec les enjeux de l'aide à la décision basée sur les données, en créant un outil clair, accessible et interactif, capable de synthétiser de grandes quantités d'informations pour un public varié. Enfin, cette expérience a renforcé mes compétences en développement d'applications web dédiées à la data science, ainsi qu'en communication visuelle et analytique.</p>
    `,
    resourceButtons: [
      {
        label: 'Accéder à l\'application RShiny',
        href: 'https://deleziniercamille.shinyapps.io/SAEreporting2025/',
        target: '_blank',
        primary: true,
      },
    ],
  },

  {
  slug: 'sae-portfolio-numerique-reflexif',
  title: 'PortFolio BUT 2',
  periode: 'BUT 2',
  semester: 'S5',
  date: '2025-06-09', 
  note: '14.5/20',
  teamSize: 1,
  image: '../picture/PhotosProjets/PortFolioBUT2.png', 
  accent: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Dégradé moderne violet/bleu électrique, univers design et web
  summary: 'Développement d\'un espace web individuel et démarche d\'auto-évaluation pour structurer, normer et valoriser mes compétences en Science des Données.',
  detailsHtml: `
    <h3>Outils et Environnements de développement</h3>
    <p>HTML5, CSS, JavaScript, Serveurs d'hébergement du département SD, Gestion de versions (Git)</p>

    <h3>Description du projet</h3>
    <p>Mené de manière continue et évolutive tout au long du cursus, ce projet de SAÉ transverse a pour objectif de concevoir, déployer et administrer un portfolio numérique individuel hébergé sur les serveurs du département Science des Données.</p>
    <p>Au-delà de la brique technique de développement web front-end, le projet s'articule autour d'une démarche d'ingénierie rigoureuse visant à professionnaliser ma communication :</p>
    <ul>
      <li><strong>Audit et amélioration continue :</strong> Identification et correction des bugs d'affichage, normalisation de l'architecture du code source et traitement approfondi des erreurs syntaxiques ou orthographiques pour garantir une rigueur maximale.</li>
      <li><strong>Professionnalisation du ton :</strong> Traduction d'activités académiques et techniques complexes en fiches projets claires, accessibles et percutantes pour un public de recruteurs ou de jurys universitaires.</li>
      <li><strong>Démarche réflexive et bilan :</strong> Rédaction d'une synthèse analytique approfondie liant mes résultats académiques, mes motivations sectorielles et mon investissement, afin de justifier de manière éclairée mon projet de poursuite d'études ou d'insertion professionnelle.</li>
    </ul>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet d'auto-évaluation et de valorisation technique valide des apprentissages fondamentaux :</p>
    <ul>
      <li><strong>Valoriser une production dans un contexte professionnel (Compétence 3) :</strong> Capacité à adapter son niveau d'expression, sa charte graphique et son ergonomie au statut du destinataire (experts SI, enseignants, recruteurs).</li>
      <li><strong>Autonomie et démarche itérative :</strong> Gestion d'un projet long-cours en autonomie complète, de la phase de maquettage jusqu'à la mise en production sur serveur universitaire, tout en intégrant des cycles d'amélioration continue.</li>
      <li><strong>Analyse critique des compétences :</strong> Prise de recul sur mes propres apprentissages (SAÉ, stages, cours) pour cartographier mes savoir-faire techniques de manière structurée et alignée sur le référentiel de compétences du BUT Science des Données.</li>
    </ul>
  `,
  resourceButtons: [
    {
      label: 'Explorer mon Portfolio de BUT 2',
      href: 'https://stid-niort.fr/2026/camilledelezinier', 
      target: '_self',
      primary: true,
    },
  ],
},

  // ------------------------------------------
  // PROJETS BUT 3
  // ------------------------------------------
  {
  slug: 'sae-mydental-bi-outil-decisionnel',
  title: 'Projet MYDental-BI',
  periode: 'BUT 3',
  semester: 'S5',
  date: '2025-12-08',
  note: '15/20',
  teamSize: 4,
  image: '../picture/PhotosProjets/MyDental.png', // À adapter selon vos visuels
  accent: 'linear-gradient(135deg, #4facfe, #00f2fe)', // Dégradé bleu azur / cyan moderne, univers médical/dentaire
  summary: 'Audit, correction d\'indicateurs défectueux et développement d\'un simulateur de rentabilité pour le système d\'information décisionnel d\'un centre dentaire.',
  detailsHtml: `
    <h3>Langages et logiciels utilisés</h3>
    <p>JavaScript (Node.js), SQL (PostgreSQL), Docker & Docker Compose, Git/GitHub</p>

    <h3>Description du projet</h3>
    <p>Dans le cadre de cette SAÉ axée sur les Systèmes d'Information Décisionnels (SID), l'objectif principal était de reprendre, auditer et améliorer une application de Business Intelligence préexistante pour le centre dentaire <strong>MYDental</strong>. L'application livrée initialement par un prestataire externe présentait plusieurs dysfonctionnements techniques majeurs ainsi que des erreurs de logique dans le calcul des indicateurs clés de performance (KPIs), ce qui freinait la prise de décision de la direction.</p>

    <p>Le projet s'est structuré autour de trois axes de réalisation. Dans un premier temps, un audit critique du code source a été mené afin de repérer les anomalies, corriger les formules mathématiques erronées et fiabiliser les indicateurs de suivi de l'activité médicale. Ensuite, nous avons conçu et intégré de bout en bout un module d'aide à la décision prospectif : un simulateur de rentabilité. Ce module interactif permet aux gestionnaires du centre de simuler divers scénarios financiers et d'évaluer l'évolution des marges du cabinet selon des variables métiers modulables. Enfin, notre équipe a été force de proposition en ajoutant des indicateurs visuels complémentaires pertinents pour optimiser le pilotage opérationnel du centre.</p>

    <p>Pour mener à bien ce travail de refonte dans un cadre collaboratif, une gestion de projet rigoureuse sous Git a été mise en place. L'équipe a utilisé un flux de développement structuré (fork, clonage, création de branches de fonctionnalités spécifiques <code>feature/</code>, revues de code croisées et fusions supervisées vers la branche <code>develop</code>), garantissant la maintenabilité et l'intégrité finale du code source de l'application.</p>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet collaboratif d'envergure m'a permis de consolider des savoir-faire essentiels du parcours VCOD, notamment l'intervention sur un système décisionnel existant. J'ai développé une solide expertise dans le débogage de code orienté business intelligence et dans la traduction de besoins métiers abstraits (calculs de rentabilité, flux financiers, taux d'occupation) en fonctionnalités logicielles concrètes, robustes et conformes à un cahier des charges.</p>

    <p>Sur le plan méthodologique, ce projet a renforcé ma maîtrise des outils de gestion de version et du travail en équipe sous Git et GitHub. J'ai appris à travailler efficacement en synergie au sein d'un groupe de quatre personnes, à planifier les livrables techniques, à argumenter des choix d'indicateurs devant un jury et à documenter proprement les modifications de code pour assurer la pérennité de l'application.</p>
  `,
    resourceButtons: [
      {
        label: 'Ouvrir le sujet du projet',
        href: '../Projets/S6/MY DENTAL/sujet_MYDENTAL.pdf', // À adapter selon votre arborescence
        downloadName: 'sujet_mydental_bi.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Code source du projet',
        href: '../Projets/S6/MY DENTAL/MYDental-main', // À adapter selon votre arborescence
        downloadName: 'projet_mydental_bi.zip',
        primary: false,
      },
    ],
  },
  {
    slug: 'big-data-pyspark',
    title: 'Mini-Projet Big Data - PySpark',
    periode: 'BUT 3',
    semester: 'S6',
    image: '../picture/PhotosProjets/MiniProjetPyspark.png',
    date: '2026-02-14',
    note: '18/20',
    teamSize: 1,
    accent: 'linear-gradient(135deg, #7fe0db, #57c7c0)',
    summary: 'Introduction aux méthodes de machine learning et à leur place dans une chaîne data.',
    summary: 'Exploration exploratoire et analyse statistique d\'un important jeu de données au format standard GTFS à l\'aide de l\'écosystème distribué PySpark.',
    detailsHtml: `
      <h3>Langages et outils utilisés</h3>
      <p>PySpark (Spark SQL & DataFrames), Python, Notebook Jupyter, Matplotlib, Seaborn</p>

      <h3>Description du projet</h3>
      <p>Ce mini-projet consiste à réaliser une analyse exploratoire complète d'un jeu de données volumineux au standard international GTFS (General Transit Feed Specification) issu des transports en commun d'Île-de-France. Ce format interconnecte plusieurs fichiers CSV (agency, routes, trips, stops, stop_times, calendar, etc.) contenant toutes les informations de navigation, d'horaires et de géolocalisation du réseau régional.</p>
      <p>La première phase du projet est dédiée à l'ingestion, à la compréhension de la structure des DataFrames Spark (schémas, volumétrie), à la documentation des clés de jointure relationnelles et à l'évaluation de la qualité des données (gestion des valeurs manquantes et des doublons). Face à la taille critique de fichiers comme <code>stop_times.txt</code>, une réflexion approfondie sur l'optimisation distribuée (filtres en amont, mise en cache, partitionnement) est nécessaire pour mener à bien les calculs.</p>
      <p>La seconde phase consiste à développer au minimum 5 axes d'analyses statistiques complexes répondant à des problématiques stratégiques d'usagers ou de décideurs : étude de la couverture géographique (densité des arrêts), modélisation de l'offre de transport (fréquences, amplitudes horaires), analyses temporelles (comparatifs semaine vs week-end), benchmarking des opérateurs (RATP, SNCF) et détection de hubs de connectivité. Chaque traitement débouche sur une visualisation graphique claire (Seaborn/Matplotlib) et une interprétation métier argumentée.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet de fin de BUT concrétise des acquis fondamentaux dans le domaine de l'ingénierie des données à grande échelle (Semestre 6) :</p>
      <ul>
        <li><strong>Traiter des données à des fins décisionnelles (Compétence 1) :</strong> Extraction, nettoyage et manipulation de données de masse (Big Data) à travers les API distribuées de PySpark. Gestion des contraintes de stockage, d'optimisation de requêtes et de partitionnement de grappes de calcul.</li>
        <li><strong>Analyser statistiquement les données (Compétence 2) :</strong> Production d'indicateurs de distribution, de statistiques descriptives avancées (moyennes pondérées, agrégations multidimensionnelles) et interprétation de tendances sur des axes géographiques et temporels.</li>
        <li><strong>Visualisation et Restitution Data :</strong> Capacité à synthétiser des résultats complexes issus d'un environnement distribué sous forme de graphiques hautement lisibles et d'une note de synthèse décisionnelle intégrée.</li>
      </ul>
    `,
    resourceButtons: [
      {
        label: 'Télécharger le projet',
        href: '../Projets/S6/MiniProjetPySpark/Mini-Projet PySpark Delezinier Camille (1).ipynb',
        downloadName: 'Mini-Projet_PySpark_Delezinier_Camille.ipynb',
        primary: true,
      },
      {
        label: 'Télécharger la synthèse',
        href: '../Projets/S6/MiniProjetPySpark/SynthesePySpark.pdf',
        downloadName: 'Synthese_PySpark_Delezinier_Camille.pdf',
        primary: false,
      },
    ],
  },
  {
  slug: 'sae-migration-nosql-mongodb-paris',
  title: ' Migration de données vers un environnement NoSQL',
  periode: 'BUT 3',
  semester: 'S5',
  date: '2026-01-11', 
  note: '15.5/20',
  teamSize: 1,
  image: '../picture/PhotosProjets/MongoDB.png', 
  accent: 'linear-gradient(135deg, #13aa52, #001e2b)', 
  summary: 'Migration complète d\'un système d\'information de transport urbain et environnemental depuis SQLite vers MongoDB, couplée au développement d\'un dashboard cartographique.',
  detailsHtml: `
    <h3>Langages et outils utilisés</h3>
    <p>Python, MongoDB, PyMongo, SQLite, Streamlit (ou Plotly/Flask), Folium (Cartographie)</p>

    <h3>Description du projet</h3>
    <p>Dans un contexte futuriste représentant la ville de Paris en 2055, ce projet de SAÉ avait pour objectif de moderniser le système de suivi des transports en commun et de l'empreinte écologique de la métropole. Face à l'apparition de flux de capteurs en temps réel et de données semi-structurées, l'infrastructure relationnelle classique sous SQLite a montré ses limites, imposant une transition nécessaire vers une architecture NoSQL. Le projet a été mené de bout en bout à travers quatre grandes étapes techniques successives.</p>
    
    <p>Le travail a débuté par une phase d'analyse et de requêtage relationnel, nécessitant une immersion dans la base SQLite d'origine pour comprendre la structure des tables telles que les lignes, les arrêts, les véhicules ou les mesures de pollution, et valider ainsi les données de référence via des requêtes SQL. Par la suite, la conception et l'implémentation d'un pipeline de migration (ETL) à l'aide d'un script robuste sous Python ont constitué une étape clé. Ce processus a demandé de repenser complètement la modélisation des données en passant d'un schéma relationnel normalisé à une structure de documents JSON imbriqués et dénormalisés propre à MongoDB.</p>
    
    <p>Une fois la migration effectuée, la phase de requêtage NoSQL avancé a permis de développer des requêtes d'agrégation complexes et des filtres sous MongoDB afin d'extraire des indicateurs métiers stratégiques comme les calculs de retards moyens, les bilans d'émissions de CO2 et les croisements de capteurs. Enfin, l'étape finale a consisté à concevoir un dashboard et une cartographie dynamique pour la restitution visuelle des résultats via une interface interactive. Ce module intègre des graphiques analytiques développés avec Pandas et Matplotlib, ainsi qu'une carte choroplèthe interactive générée sous Folium affichant le niveau moyen de CO2 par quartier et des marqueurs géographiques filtrables détaillant l'impact sonore et thermique à chaque arrêt de bus.</p>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet technique et transverse valide des compétences clés du parcours VCOD :</p>
    <ul>
      <li><strong>Traiter des données à des fins décisionnelles (Compétence 1) :</strong> Maîtrise des concepts fondamentaux du NoSQL orienté documents. Capacité à faire migrer un système d'information de manière industrielle, à manipuler des requêtes géospatiales et à restructurer la donnée pour optimiser ses performances de lecture.</li>
      <li><strong>Développer un outil décisionnel (Compétence 4) :</strong> Conception d'une interface d'exploration agile combinant la puissance de calcul de MongoDB et la clarté d'un outil de visualisation géographique, offrant aux décideurs de la collectivité un outil d'aide à la décision face aux enjeux environnementaux.</li>
    </ul>
  `,
  resourceButtons: [
    {
      label: 'Voir le Sujet',
      href: '../Projets/S5/MongoDB/sujetMongoDB.pdf', 
      target: '_blank',
      primary: true,
    },
    {
      label: 'Télécharger le projet',
      href: '../Projets/S5/MongoDB/SAE MongoDB.zip',
      downloadName: 'Projet_MongoDB.zip',
      primary: false,
    },
  ],
},
  {
  slug: 'projet-llm-portfolio-interactif-rag',
  title: 'Conception d\'un Chatbot -RAG',
  periode: 'BUT 3',
  semester: 'S6',
  date: '2026-01-25', 
  note: '17/20',
  teamSize: 1,
  image: '../picture/PhotosProjets/LLM.png', 
  accent: 'linear-gradient(135deg, #9c1be2, #9c1be2)', 
  summary: 'Développement d\'un chatbot intelligent basé sur une architecture RAG (Retrieval-Augmented Generation) agissant comme un jumeau virtuel pour explorer mon profil professionnel.',
  detailsHtml: `
    <h3>Langages et outils utilisés</h3>
    <p>Python, Large Language Models (LLMs), Frameworks d'IA (LangChain / LlamaIndex), Vector Stores (FAISS / Chroma), Tokenisation & Embeddings</p>

    <h3>Description du projet</h3>
    <p>Ce projet innovant de fin de cursus a pour objectif de transformer un portfolio statique traditionnel en une plateforme web interactive et intelligente. Pour se démarquer de la concurrence, le site intègre un agent conversationnel autonome capable de répondre précisément aux recruteurs en se comportant comme mon jumeau virtuel. N'ayant pas nativement accès à mes données privées, le chatbot s'appuie sur la méthodologie RAG (Retrieval-Augmented Generation) pour fournir des réponses fiables et contextualisées.</p>
    
    <p>Le travail technique comprend plusieurs étapes clés de l'ingénierie LLM, à commencer par la préparation complète du corpus de connaissances. Cette phase initiale requiert l'extraction, le nettoyage et le découpage en blocs sémantiques ou morceaux (<i>chunking</i>) de l'ensemble de mes données professionnelles personnelles, telles que mon CV, mes rapports de projets, mes compétences et mes réalisations passées. Vient ensuite l'étape de vectorisation (<i>embeddings</i>), consistant à transformer ces blocs de texte non structurés en vecteurs numériques de haute dimension pour obtenir une représentation sémantique mathématique à l'aide d'un modèle d'embedding dédié.</p>
    
    <p>Une fois vectorisées, l'indexation et le stockage permettent de sauvegarder et d'organiser efficacement ces données vectorielles au sein d'un <i>Vector Store</i>, une base de données spécialisée. Pour finir, la mise en place du pipeline de récupération et de génération vient orchestrer l'implémentation de la recherche sémantique. Lorsqu'un utilisateur pose une question au jumeau virtuel, comme par exemple l'interroger sur mes compétences en Big Data, le système extrait instantanément le contexte le plus pertinent de la base vectorielle, construit un prompt guidé et sécurisé, puis interroge le LLM pour générer une réponse fluide, naturelle et totalement exempte d'hallucinations.</p>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet avant-gardiste concrétise ma spécialisation dans le domaine de l'Intelligence Artificielle Générative (Parcours VCOD) :</p>
    <ul>
      <li><strong>Traitement des données complexes (Compétence 1 & 2) :</strong> Manipulation de données textuelles mal structurées, maîtrise des concepts de fenêtres de contexte, de tokenisation et d'optimisation de la recherche sémantique par similarité cosinus.</li>
      <li><strong>Développement d'outils décisionnels intelligents (Compétence 4) :</strong> Architecture de pipelines d'IA de bout en bout, de l'ingestion du document jusqu'à la restitution de la réponse à l'utilisateur final.</li>
      <li><strong>Valorisation d'une production et Innovation :</strong> Capacité à vulgariser et appliquer des concepts industriels de pointe (propres aux équipes d'ingénierie IA comme celles du Groupe IMA) pour concevoir un outil de communication et de recrutement différenciant.</li>
    </ul>
  `,
    resourceButtons: [
      {
        label: 'Télécharger le projet',
        href: '../Projets/S6/LLM/projet-iut-potfolio.zip', 
        target: '_blank',
        primary: true,
      },
    ],
  },
  {
  slug: 'projet-perceptron-reseaux-neurones',
  title: 'Discrimination d\'Images par Réseaux de Neurones',
  periode: 'BUT 3',
  semester: 'S5',
  date: '2025-11-30', // Mis à jour selon l'année universitaire 2025/2026 de votre rapport
  note: '15/20',
  teamSize: 2,
  image: '../picture/PhotosProjets/Perceptron.png', 
  accent: 'linear-gradient(135deg, #ff6b6b, #ff8e53)', // Dégradé dynamique chaud évoquant les activations de neurones
  summary: 'Classification automatisée d\'images complexes du dataset Wang à travers l\'implémentation et la comparaison de modèles MLP, CNN et de Transfer Learning.',
  detailsHtml: `
    <h3>Langages et outils utilisés</h3>
    <p>Python, TensorFlow / Keras, NumPy, Pandas, Scikit-Learn, Matplotlib</p>

    <h3>Description du projet</h3>
    <p>Ce projet, réalisé dans le cadre du module d'introduction aux réseaux de neurones, avait pour objectif de concevoir un système automatisé performant capable de classifier une image inconnue parmi dix catégories distinctes issues du dataset de référence Wang. L'étude s'est concentrée sur des classes visuellement variées et parfois trompeuses telles que les jungles, plages, monuments, bus, dinosaures, éléphants, fleurs, chevaux, montagnes et plats. La démarche s'est structurée autour d'une progression technique itérative visant à mesurer l'apport de la complexification des architectures de Deep Learning sur la précision de la discrimination.</p>

    <p>La première phase a consisté à travailler sur une approche par descripteurs et structure entièrement connectée. À partir de vecteurs de signatures pré-extraits, les données ont été nettoyées et normalisées à l'aide d'un StandardScaler afin d'optimiser le calcul et d'assurer une convergence fluide de la descente de gradient. Un premier réseau d'apprentissage denses de type Perceptron Multicouche (MLP) a été développé, posant les bases de notre protocole d'évaluation grâce à l'analyse fine des matrices de confusion, de la précision, du rappel et du F1-score. Face aux limites de cette structure sur les données complexes, une approche Deep Learning par modèle convolutif (CNN) a été conçue de bout en bout pour apprendre directement les caractéristiques spatiales et les motifs des images brutes. L'architecture a intégré des couches de convolution (Conv2D) et de Max Pooling, sécurisées par des couches de Dropout pour régulariser le modèle et freiner le surapprentissage.</p>

    <p>La dernière étape a exploré la technique du Transfer Learning en s'appuyant sur des architectures profondes pré-entraînées sur de très larges bases d'images. Cette méthode a permis de transférer des connaissances visuelles robustes vers notre problématique métier, optimisant de manière significative le coût computationnel et le temps de calcul. Le développement a soulevé des défis concrets, notamment la gestion du surapprentissage identifié par le décrochage des courbes de perte entre l'entraînement et la validation, ainsi que les confusions logiques entre les paysages de plage et de montagne. L'ajustement rigoureux des hyperparamètres comme le taux d'apprentissage et la taille des lots a permis d'accroître la capacité de généralisation globale de notre système.</p>

    <h3>Compétences et connaissances acquises</h3>
    <ul>
      <li><strong>Traiter des données complexes et non structurées (Compétence 1 & 2) :</strong> Capacité à manipuler et standardiser des flux d'images et des matrices de signatures complexes, et à analyser de manière critique des courbes d'apprentissage pour orienter la performance d'un modèle.</li>
      <li><strong>Développer un outil décisionnel basé sur l'IA (Compétence 4) :</strong> Maîtrise opérationnelle de l'écosystème TensorFlow et Keras pour concevoir, entraîner, évaluer et optimiser des pipelines de classification de pointe (MLP, CNN et Transfer Learning).</li>
      <li><strong>Analyse et rigueur méthodologique :</strong> Capacité à dresser un diagnostic précis des dysfonctionnements d'un réseau (surapprentissage, biais de confusion visuelle) et à y apporter des solutions de régularisation industrielles adaptées.</li>
    </ul>
  `,
  resourceButtons: [
    {
      label: 'Ouvrir le rapport',
      href: '../Projets/S5/Projet Perceptron/Projet Perceptron Decoust Chloé, Delezinier Camille.pdf',
      downloadName: 'Projet_Perceptron_Rapport.pdf',
      target: '_blank',
      primary: true,
    },
    {
      label: 'Télécharger le projet',
      href: '../Projets/S5/Projet Perceptron/Reseaux_neurones.7z', // À adapter selon votre structure
      downloadName: 'Reseaux_neurones.7z',
      primary: false,
    },
  ],
},
  {
  slug: 'projet-dataviz-qlik-sense',
  title: 'Projet de Dataviz Décisionnelle - Qlik Sense',
  periode: 'BUT 3',
  semester: 'S5',
  date: '2025-11-07',
  note: '15/20',
  teamSize: 2,
  image: '../picture/PhotosProjets/Qlik.png', 
  accent: 'linear-gradient(135deg, #a8ff78, #78ffd6)', // Un dégradé vert/cyan qui rappelle la charte de Qlik
  summary: 'Conception et développement d\'une application de Business Intelligence interactive sur Qlik Sense pour l\\\'analyse d\\\'une problématique socio-économique en libre accès.',
  detailsHtml: `
    <h3>Logiciel utilisé</h3>
    <p>Qlik Sense (Cloud)</p>

    <h3>Description du projet</h3>
    <p>Ce projet consiste à concevoir une application de Business Intelligence et de data visualisation simple, intelligible et fonctionnellement cohérente à l'aide de la solution cloud Qlik Sense. L'objectif principal est de définir une problématique analytique claire, puis de l'explorer à l'aide d'un ou plusieurs tableaux de bord interactifs (pages de viz) pour guider le raisonnement de l'utilisateur.</p>
    <p>Pour ce faire, le travail s'articule autour de plusieurs étapes clés de la chaîne de la donnée. Tout d'abord, le chargement et la modélisation fonctionnelle de jeux de données cibles, enrichis par des recherches personnelles issues de plateformes d'Open Data. Un traitement rigoureux est ensuite appliqué pour s'assurer de la qualité et de la cohérence des données intégrées. Enfin, la restitution s'appuie sur un choix pertinent de composants graphiques avancés et d'objets de narration (Textes et Images) afin d'expliciter le comportement des indicateurs. L'accent est mis sur l'efficacité décisionnelle : la clarté, la pertinence des filtres et la fluidité de l'analyse priment sur la simple esthétique graphique, l'application devant permettre une exploration autonome et une aide à la décision limpide.</p>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet s'inscrit directement dans le cadre des compétences du Semestre 5 (Parcours VCOD) et m'a permis d'acquérir des savoir-faire concrets :</p>
    <ul>
      <li><strong>Traitement des données à des fins décisionnelles (Compétence 1) :</strong> J'ai appris à charger, structurer et lier fonctionnellement des sources de données hétérogènes (fichiers sources et Open Data), tout en garantissant leur qualité et leur intégrité avant leur exploitation visuelle.</li>
      <li><strong>Développement d'un outil décisionnel (Compétence 4) :</strong> J'ai développé une maîtrise pratique de l'écosystème Qlik Sense en exploitant ses fonctionnalités natives et son aide en ligne pour paramétrer au mieux les indicateurs de performance (KPI) et les graphiques de business intelligence.</li>
      <li><strong>Analyse de problématiques et Data Storytelling :</strong> Ce projet a renforcé ma capacité à traduire un besoin métier ou une question complexe en un parcours utilisateur logique. J'ai appris à intégrer des éléments contextuels et textuels pour vulgariser la donnée et rendre l'analyse accessible aux décideurs.</li>
      <li><strong>Autonomie technique :</strong> Au-delà des notions abordées en travaux pratiques, j'ai su explorer de manière autonome la documentation technique de l'outil pour implémenter des fonctions de calcul et des graphiques avancés.</li>
    </ul>
  `,
  resourceButtons: [
    {
      label: 'Accéder à l\'application Qlik Sense',
      href: 'https://e22pbvajft8ym09.eu.qlikcloud.com/sense/app/b8dcc871-b1f6-4890-b62e-836e2bdd1fb4/sheet/YSCLfjp/state/analysis/hubUrl/%2Fanalytics%2Fhome', // Lien issu du document, à adapter si besoin
      target: '_blank',
      primary: true,
    },
  ],
},
  {
    slug: 'reporting-sentiment-bigdata-ml',
    title: "Reporting d'une analyse de sentiment — Big Data & ML",
    periode: 'BUT 3',
    semester: 'S6',
    date: '2026-02-01',
    note: '?/20',
    teamSize: 1,
    image: '../picture/PhotosProjets/ProjetPySpark.png', 
    accent: 'linear-gradient(135deg, #00d4ff, #0099ff)',
    summary: "Création d'une infrastructure Big Data pour collecter, nettoyer et analyser en temps réel la polarité des opinions sur les réseaux sociaux.",
    detailsHtml: `
    <h3>Langages et outils utilisés</h3>
    <p>Apache Kafka, Apache Spark (Spark Streaming / Structured Streaming), HDFS (Hadoop Distributed File System), SparkML, Python, Dash / Streamlit</p>

    <h3>Description du projet</h3>
    <p>Ce projet d'approfondissement consiste à concevoir et déployer une infrastructure complexe de traitement de flux massifs de bout en bout, simulant l'analyse de l'opinion publique sur les réseaux sociaux en temps réel. Le pipeline technique mis en œuvre repose sur l'interconnexion fluide de plusieurs briques majeures de l'écosystème Big Data. L'architecture commence par la phase d'ingestion et de brokerage gérée par Apache Kafka, où des producteurs ont été configurés pour simuler l'envoi continu de flux de données textuelles répartis stratégiquement au sein de topics et de partitions afin de garantir un parallélisme optimal et une haute disponibilité.</p>
    
    <p>En aval, la brique de traitement et de nettoyage des données s'appuie sur Spark Streaming. Elle consomme les messages en temps réel depuis le cluster et y applique des transformations distribuées ainsi que des fenêtres glissantes temporelles permettant le calcul à chaud d'indicateurs de volumétrie. C'est à ce stade qu'intervient le module d'Intelligence Artificielle développé avec SparkML : un modèle de classification appliqué au traitement du langage naturel (NLP) est entraîné et déployé au cœur du flux pour prédire instantanément la polarité de chaque message, distinguant les sentiments positifs, négatifs ou neutres.</p>
    
    <p>Pour assurer la pérennité du système, le stockage de masse est entièrement confié au système de fichiers distribué Hadoop (HDFS), qui gère la persistance et la sérialisation des flux traités, des fichiers de logs ainsi que la sauvegarde du modèle de Machine Learning. Enfin, le projet intègre une dimension de supervision indispensable aux décideurs sous la forme d'un dashboard interactif, chargé de restituer visuellement les indicateurs streaming calculés et l'évolution des sentiments à travers des graphiques mis à jour de manière dynamique.</p>

    <h3>Compétences et connaissances acquises</h3>
    <p>Ce projet hautement technique valide l'excellence de votre parcours VCOD dans la gestion des données massives :</p>
    <ul>
      <li><strong>Traiter des données massives et des flux (Compétence 1) :</strong> Compréhension concrète d'une infrastructure distribuée (Cluster). Maîtrise des concepts d'offsets, de groupes de consommateurs Kafka, et de la tolérance aux pannes sur HDFS.</li>
      <li><strong>Analyser statistiquement et modéliser (Compétence 2) :</strong> Construction d'un pipeline de Machine Learning scalable à l'échelle du Big Data, de la phase de vectorisation de texte (TF-IDF/Tokenization) jusqu'à l'évaluation et la mise en production du modèle de sentiment.</li>
      <li><strong>Percevoir les enjeux de l'interoperabilité :</strong> Capacité à faire collaborer des technologies hétérogènes au sein d'une même architecture logicielle fluide, sécurisée et performante.</li>
    </ul>
  `,
    resourceButtons: [
      {
        label: 'Télécharger le projet',
        href: '../Projets/S6/ProjetSpark/SparkProjet.zip',
        downloadName: 'Reporting_Sentiment_Project.zip',
        primary: true,
      },
      {
        label: 'Télécharger le sujet',
        href: '../Projets/S6/ProjetSpark/sujet_projet_Spark.pdf',
        downloadName: 'Sujet_Projet_Spark.pdf',
        primary: false,
      },
    ],
  },

  // ------------------------------------------
  // PROJETS ENEDIS (ANCIENNEMENT ALTERNANCE)
  // ------------------------------------------
  {
    slug: 'projet-biblos-maff-illuin-dialogue',
    title: 'Biblos MAFF - ILLUIN Dialogue',
    periode: 'ENEDIS',
    semester: 'Alternance',
    date: '2026-05-05', 
    note: 'Non renseignée',
    teamSize: 3,
    image: '../picture/PhotosProjets/RAGbiblosMAFF.png',
    accent: 'linear-gradient(135deg, #667eea, #764ba2)', 
    summary: 'Déploiement d\'un agent conversationnel (ChatBox RAG) sur la plateforme ILLUIN Dialogue pour centraliser et automatiser l\'accès à la documentation métier du service AMA.',
    detailsHtml: `
      <h3>Technologies et outils utilisés</h3>
      <p>ILLUIN Dialogue (IA conversationnelle & RAG), Architecture Hybride (Scénarios guidés & LLM Génératif), API & Intégrations SI</p>

      <h3>Description du projet</h3>
      <p>Le projet <strong>Biblos MAFF</strong> est né d'un constat opérationnel au sein du service AMA (Agence Marché d’Affaires) : la multiplicité et la dispersion des supports documentaires hétérogènes, tels que les guides volumineux, les modes opératoires SharePoint ou les applications métiers, rendaient l'accès à l'information particulièrement complexe et chronophage pour les agents au quotidien. Pour répondre efficacement à ce besoin de réactivité, l'objectif principal a été de concevoir et de déployer une ChatBox intelligente faisant office de guide métier sur la plateforme industrielle <strong>ILLUIN Dialogue</strong>. L'outil repose sur une architecture RAG (Retrieval-Augmented Generation) qui permet, lorsqu'un utilisateur pose une question en langage naturel, d'extraire de manière ciblée les informations pertinentes des bases documentaires internes afin que le LLM génère une réponse concise, fiable et totalement exempte d'hallucinations, accompagnée du lien vers la source officielle.</p>
      
      <p>Le projet se distingue techniquement par la mise en œuvre d'un <strong>mode hybride</strong> performant, associant astucieusement une approche guidée à base de flux de décision, d'intentions, d'extraction d'entités et de règles métiers strictes, à une approche générative garantissant la fluidité conversationnelle. Cette configuration assure un contrôle total des réponses apportées aux procédures critiques tout en offrant une expérience utilisateur naturelle. De plus, le suivi de l'outil intègre une dimension analytique rigoureuse permettant de monitorer le nombre de conversations, leur durée et le taux de satisfaction des équipes, s'inscrivant ainsi dans une démarche itérative d'amélioration continue par l'enrichissement du corpus et l'ajustement fin des prompts.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce projet d'innovation technologique s'inscrit directement dans les compétences avancées du BUT Science des Données (Parcours VCOD) :</p>
      <ul>
        <li><strong>Traiter des données à des fins décisionnelles (Compétence 1) :</strong> Structuration, indexation et traitement de données textuelles complexes et non structurées afin d'alimenter un moteur de recherche sémantique (RAG).</li>
        <li><strong>Développer un outil décisionnel (Compétence 4) :</strong> Maîtrise d'une solution d'IA conversationnelle d'échelle industrielle. Configuration d'arborescences logiques (flows), paramétrage des intentions, gestion des variables/entités et manipulation d'environnements de test et de production.</li>
        <li><strong>Cadrage de projet et approche agile :</strong> Participation active aux phases de kickoff, structuration du besoin via le modèle Lean Canvas, gestion des habilitations et prise en compte des contraintes d'indisponibilité et de mise à jour des systèmes.</li>
        <li><strong>Évaluation de la performance (Analytics) :</strong> Définition et suivi d'indicateurs de performance (KPIs) clés pour évaluer l'adoption de l'outil par les agents, le gain de temps et la précision des réponses fournies.</li>
      </ul>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le Lean Canvas du projet',
        href: '../Projets/Enedis/RAG/Projet Biblos MAFF - Lean Canvas.pptx',
        downloadName: 'Lean_Canvas_Biblos_MAFF.pptx',
        target: '_blank',
        primary: true,
      },
    ],
  },
  {
    slug: 'pilotage-crise-climatique',
    title: 'Pilotage de Crise Climatique',
    periode: 'ENEDIS',
    semester: 'Alternance',
    date: '2025-06-15',
    note: '16/20',
    teamSize: 1,
    image: '../picture/PhotosProjets/PCC.png',
    accent: 'linear-gradient(135deg, #00d4ff, #0099ff)',
    summary: 'Outil de visualisation pour un Système de pilotage et gestion des crises climatiques.',
    detailsHtml: `
      <h3>Entreprise et contexte</h3>
      <p>Stage de fin d'études de 12 semaines réalisé au sein d'<strong>Enedis</strong>. L'objectif principal de la mission consistait à accompagner la transition numérique de la Direction Régionale en modernisant les processus d'extraction de données et en développant des outils décisionnels (Business Intelligence) performants pour les équipes métiers et le management.</p>

      <h3>Description des missions et projets réalisés</h3>
      <p>Le travail s'est articulé autour de trois grands axes de la chaîne de la donnée, nécessitant une forte immersion fonctionnelle. En premier lieu, la phase d'automatisation des flux de données (ETL) s'est concentrée sur la centralisation et le nettoyage de sources d'informations hétérogènes, remplaçant avec succès les tâches manuelles chronophages par des scripts d'extraction automatisés afin de fiabiliser la qualité des données décisionnelles. En second lieu, la conception de tableaux de bord interactifs et intuitifs sous Power BI a permis de répondre à des besoins opérationnels critiques tels que la gestion des équipes, le pilotage des pannes et le suivi en temps réel de l'état du réseau et des clients impactés. Un accent tout particulier a été mis sur le Data Storytelling pour rendre la donnée instantanément accessible à des profils non techniques de la cellule de crise. Enfin, l'exploitation de bases de données à forte volumétrie a permis de mener des analyses statistiques descriptives poussées afin d'en extraire des tendances exploitables, d'identifier les anomalies opérationnelles et de formuler des recommandations stratégiques concrètes fondées sur les faits.</p>

      <h3>Compétences et connaissances acquises</h3>
      <p>Ce stage de fin de cursus valide l'ensemble des compétences cibles du parcours VCOD en situation professionnelle réelle :</p>
      <ul>
        <li><strong>Traiter des données à des fins décisionnelles (Compétence 1) :</strong> Maîtrise des architectures de données, nettoyage, modélisation de schémas relationnels et gestion d'extractions industrielles sécurisées.</li>
        <li><strong>Analyser statistiquement les données (Compétence 2) :</strong> Capacité à transformer de la donnée brute en indicateurs métiers pertinents (KPIs), à synthétiser l'information et à mener des analyses descriptives fiables.</li>
        <li><strong>Valoriser une production dans un contexte professionnel (Compétence 3) :</strong> Rédaction d'un rapport de stage structuré, vulgarisation de concepts techniques lors de la soutenance devant un jury, et posture de communicant face aux exigences d'une grande entreprise.</li>
        <li><strong>Développer un outil décisionnel (Compétence 4) :</strong> Conception logicielle agile d'applications décisionnelles de bout en bout, de la phase de recueil des besoins utilisateurs jusqu'aux tests, au déploiement et à la documentation utilisateur.</li>
      </ul>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/Enedis/PCC/Rapport de stage Enedis - Delezinier Camille.pdf',
        downloadName: 'Rapport_STAGE_Enedis.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Télécharger le PPT de soutenance',
        href: '../Projets/Enedis/PCC/Powerpoint_Enedis_soutenance.pptx',
        downloadName: 'Powerpoint_Enedis_soutenance.pptx',
        primary: false,
      },
    ],
  },
  {
    slug: 'gestion-depannages',
    title: 'Passation Gestion Des Dépannages',
    periode: 'ENEDIS',
    semester: 'Alternance',
    date: '2026-06-10', 
    note: 'Non renseignée',
    teamSize: 1,
    image: '../picture/PhotosProjets/GDD.png',
    accent: 'linear-gradient(135deg, #11998e, #38ef7d)',
    summary: 'Programmation et industrialisation de scripts d\'automatisation (ETL), requêtage d\'API HTTP et gestion d\'architectures de stockage d\'objets (MinIO) pour le pilotage des dépannages.',
    detailsHtml: `
      <h3>Contexte et Enjeux Métiers</h3>
      <p>Dans le cadre de mon alternance au sein de la Team Numérique d'<strong>Enedis</strong>, j'ai été intégrée au cœur du service des Systèmes d'Information (SI). L'enjeu majeur de mes missions consistait à fiabiliser et fluidifier le pilotage opérationnel des dépannages sur le réseau électrique en remplaçant les processus manuels de collecte par des architectures de données automatisées, industrielles et sécurisées.</p>

      <h3>Description des Réalisations Techniques</h3>
      <p>En me détachant de la simple restitution visuelle, mon travail s'est focalisé en profondeur sur la conception et l'ingénierie robuste de la chaîne de traitement de données (Back-End). Cela s'est traduit d'abord par le développement de scripts d'automatisation (ETL) sous VBA, programmés pour assurer l'extraction et le nettoyage de données complexes, ainsi que la transformation des formats sources tableaux structurés pour les incidents sur une page et pour le plannig des agents sur une autre page. Pour garantir une remontée d'information fluide et continue, j'ai mis en place l'interconnexion applicative par requêtes HTTP (API), interrogeant automatiquement les outils métiers et bases de données internes d'Enedis. Enfin, l'architecture intègre la gestion avancée du stockage d'objets via la solution open-source MinIO, modélisée et déployée pour centraliser les historiques de données brutes et de logs, sécurisant de bout en bout la résilience technique de l'infrastructure décisionnelle.</p>

      <h3>Compétences et Connaissances Acquises</h3>
      <p>Cette immersion d'un an en entreprise a validé mes compétences de haut niveau en ingénierie de données du parcours VCOD :</p>
      <ul>
        <li><strong>Traiter des données à des fins décisionnelles (Compétence 1) :</strong> Maîtrise complète du cycle de vie de la donnée (insertion, modification, extraction). Capacité à écrire des programmes back-end correctement structurés, documentés et respectant rigoureusement les bonnes pratiques de développement.</li>
        <li><strong>Automatisation et Interopérabilité des tâches :</strong> Compréhension fine des enjeux liés à la planification de scripts automatiques, à la gestion des dépendances techniques et à l'interconnexion de briques logicielles hétérogènes (API, Serveurs de stockage).</li>
        <li><strong>Culture SI et Architecture Logicielle :</strong> Sensibilisation avancée aux contraintes d'une Direction des Systèmes d'Information d'envergure nationale (sécurité des données, gestion des environnements, documentation technique adaptée aux experts SI).</li>
      </ul>
    `,
    resourceButtons: [
      {
        label: 'Ouvrir le rapport',
        href: '../Projets/Enedis/GDD/Rapport Alternance - Delezinier Camille (1).pdf',
        downloadName: 'Rapport_Alternance_Enedis.pdf',
        target: '_blank',
        primary: true,
      },
      {
        label: 'Télécharger le Fichier de Passation GDD ',
        href: '../Projets/Enedis/GDD/Fichier de Passation GDD Soutenance.xlsm',
        downloadName: 'Fichier_de_Passation_GDD_Soutenance.xlsm',
        primary: false,
      },
    ],
  }


];

// Configuration des titres globaux pour la page hub générale
const HUB_CONFIG = {
  periodes: ['Tout', 'BUT 2', 'BUT 3', 'ENEDIS'],
};

// ==========================================
// 2. FONCTIONS UTILITAIRES
// ==========================================
function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatTeamSize(teamSize) {
  if (!teamSize || teamSize <= 1) return 'Projet individuel';
  return `Projet en équipe de ${teamSize} personnes`;
}

// ==========================================
// 3. LOGIQUE DE LA GALERIE UNIQUE (HUB)
// ==========================================
function initGlobalGallery() {
  const mount = document.querySelector('[data-project-gallery]');
  if (!mount) return;

  // Injection du squelette structurel et des contrôles (remplacement Filtre par Période)
  mount.innerHTML = `
    <section class="project-hub-shell">

      <div class="project-controls" role="search" aria-label="Filtres des projets">
        <label>
          <span>Période</span>
          <select data-filter-periode>
            ${HUB_CONFIG.periodes.map((p) => `<option value="${p === 'Tout' ? 'all' : p}">${p === 'ENEDIS' ? 'Enedis' : p}</option>`).join('')}
          </select>
        </label>

        <label>
          <span>Recherche</span>
          <input data-search type="search" placeholder="Rechercher un projet…" />
        </label>

        <label>
          <span>Trier</span>
          <select data-sort>
            <option value="date-desc">Plus récent</option>
            <option value="alpha-asc">A → Z</option>
          </select>
        </label>

        <label>
          <span>Affichage</span>
          <select data-view-mode>
            <option value="cards">Vignettes</option>
            <option value="list">Liste</option>
          </select>
        </label>
      </div>

      <div class="project-results">
        <div data-results class="project-count"></div>
        <div data-course-grid class="projects-grid"></div>
      </div>
    </section>
  `;

  const periodeSelect = mount.querySelector('[data-filter-periode]');
  const searchInput = mount.querySelector('[data-search]');
  const sortSelect = mount.querySelector('[data-sort]');
  const viewModeSelect = mount.querySelector('[data-view-mode]');
  const results = mount.querySelector('[data-results]');
  const grid = mount.querySelector('[data-course-grid]');

  function renderCards(list) {
    const viewMode = viewModeSelect.value;
    
    if (viewMode === 'list') {
      grid.classList.add('list-view');
      grid.classList.remove('card-view');
      grid.innerHTML = list.map((project) => `
        <a class="course-item" href="projet-detail.html?slug=${project.slug}">
          <div class="course-item-header">
            <h3>${project.title}</h3>
            <span class="course-item-semester">${project.periode}</span>
          </div>
          <p class="course-item-summary">${project.summary}</p>
          <span class="course-item-date">${formatDate(project.date)}</span>
        </a>
      `).join('');
    } else {
      grid.classList.remove('list-view');
      grid.classList.add('card-view');
      grid.innerHTML = list.map((project) => `
        <a class="course-card" href="projet-detail.html?slug=${project.slug}">
          <div class="course-thumb" style="background:${project.accent}"></div>
          <div class="course-card-body">
            <h2>${project.title}</h2>
            <p>${project.periode}</p>
          </div>
        </a>
      `).join('');
    }
  }

  function applyFilters() {
    const selectedPeriode = periodeSelect.value;
    const search = searchInput.value.trim().toLowerCase();
    const sort = sortSelect.value;

    let filtered = PROJECTS.filter((project) => {
      const matchesPeriode = selectedPeriode === 'all' || project.periode.toLowerCase() === selectedPeriode.toLowerCase();
      
      const textFields = `${project.title} ${project.summary} ${project.details || ''} ${project.periode} ${project.semester}`.toLowerCase();
      const matchesSearch = textFields.includes(search);
      
      return matchesPeriode && matchesSearch;
    });

    filtered.sort((a, b) => {
      if (sort === 'alpha-asc') return a.title.localeCompare(b.title, 'fr');
      return new Date(b.date) - new Date(a.date);
    });

    results.textContent = `${filtered.length} projet${filtered.length > 1 ? 's' : ''} affiché${filtered.length > 1 ? 's' : ''}`;
    renderCards(filtered);
  }

  periodeSelect.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  viewModeSelect.addEventListener('change', applyFilters);

  // Premier calcul initial
  applyFilters();
}

// ==========================================
// 4. LOGIQUE DE LA PAGE DE DÉTAIL DYNAMIQUE
// ==========================================
function createDetailPage() {
  const mount = document.querySelector('[data-project-detail]');
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  
  // Recherche du projet sur l'intégralité du tableau unifié
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    mount.innerHTML = `
      <section class="detail-shell">
        <h1>Projet introuvable</h1>
        <p>Le projet demandé n'existe pas ou n'a pas été trouvé.</p>
        <a class="back-about-button" href="mes-projets.html">Retour à la galerie des projets</a>
      </section>
    `;
    return;
  }

  const shellClass = project.slug === 'perceptron'
    ? 'detail-shell detail-shell--full-height'
    : 'detail-shell';

  const resourceButtons = Array.isArray(project.resourceButtons) ? project.resourceButtons : [];
  let resourceButtonsMarkup = '';

  if (resourceButtons.length) {
    resourceButtonsMarkup = `
      <section class="detail-actions" aria-label="Documents du projet">
        ${resourceButtons.map((button) => {
          if (button.disabled || !button.href) {
            return `<span class="action-button${button.primary ? ' detail-action-primary' : ''} action-button-disabled" aria-disabled="true">${button.label}</span>`;
          }
          const downloadAttribute = button.downloadName ? ` download="${button.downloadName}"` : '';
          const targetAttribute = button.target ? ` target="${button.target}" rel="noopener noreferrer" ` : '';
          return `<a class="action-button${button.primary ? ' detail-action-primary' : ''}" href="${button.href}"${downloadAttribute}${targetAttribute}>${button.label}</a>`;
        }).join('')}
      </section>
    `;
  }

  mount.innerHTML = `
    <section class="${shellClass}">
      <a class="back-projects-button" href="mes-projets.html">← Retour à tous les projets</a>
      <header class="detail-header">
        <div class="detail-hero" style="background:${project.accent}">
          <span class="detail-semester">${project.periode} (${project.semester})</span>
          <h1>${project.title}</h1>
        </div>
        <div class="detail-meta">
          <p><strong>Date :</strong> ${formatDate(project.date)}</p>
          <p><strong>Note :</strong> ${project.note || 'Non renseignée'}</p>
          <p><strong>Projet :</strong> ${formatTeamSize(project.teamSize)}</p>
          <p><strong>Résumé :</strong> ${project.summary}</p>
        </div>
      </header>
      <article class="detail-content">
        ${project.image ? `<div class="project-image-section"><img src="${project.image}" alt="${project.title}" /></div>` : ''}
        ${project.detailsHtml || `<p>${project.details}</p>`}
      </article>
      
      ${resourceButtonsMarkup || (project.reportHref ? `
      <section class="detail-actions" aria-label="Documents du projet">
        <a class="action-button detail-action-primary" href="${project.reportHref}" target="_blank" rel="noopener noreferrer">Ouvrir le rapport</a>
        <a class="action-button" href="${project.reportHref}" download="${project.reportDownloadName || ''}">Télécharger le rapport</a>
      </section>
      ` : '')}
    </section>
  `;
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
  initGlobalGallery();
  createDetailPage();
});