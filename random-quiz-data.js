const randomQuizData = [
	// Vos 60 nouvelles questions ici
	{
		question:
			"Quel muscle permet l'abduction du bras et est situé dans la fosse supra-épineuse ?",
		options: ["Deltoïde", "Supra-épineux", "Petit rond"],
		correctAnswer: 1,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question:
			"Complétez : Le muscle __________ s'insère sur le bord médial de la scapula et permet la rétraction de cette dernière.",
		options: ["Rhomboïdes", "Petit pectoral", "Grand dentelé"],
		correctAnswer: 0,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question: "Quelle fonction n'est pas assurée par le grand dorsal ?",
		options: [
			"Adduction du bras",
			"Rotation interne du bras",
			"Extension du coude",
		],
		correctAnswer: 2,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Quel muscle est responsable de la flexion du coude et de la supination de l'avant-bras ?",
		options: ["Triceps", "Biceps", "Deltoïde"],
		correctAnswer: 1,
		reference: "Muscles du bras, page 3",
	},
	{
		question:
			"Complétez : Le __________ est le principal muscle impliqué dans la flexion latérale et l'extension du tronc.",
		options: ["Transverse", "Carré des lombes", "Oblique interne"],
		correctAnswer: 1,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Quelle structure est impliquée dans la respiration en permettant l'expansion de la cage thoracique lors de l'inspiration ?",
		options: ["Carré des lombes", "Diaphragme", "Grands droits"],
		correctAnswer: 1,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Quel muscle n'est pas un muscle de la coiffe des rotateurs ?",
		options: ["Subscapulaire", "Infra-épineux", "Deltoïde"],
		correctAnswer: 2,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question: "Lequel de ces muscles est un rotateur interne du bras ?",
		options: ["Petit rond", "Infra-épineux", "Subscapulaire"],
		correctAnswer: 2,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question:
			"Complétez : Le muscle __________ permet l'adduction et la rotation interne du bras, et est situé dans le dos.",
		options: ["Grand dorsal", "Trapèze", "Grand pectoral"],
		correctAnswer: 0,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Quel muscle s'insère sur le sternum et la clavicule, et est impliqué dans la flexion et la rotation controlatérale de la tête ?",
		options: ["Splénius", "Sterno-cléido-mastoïdien", "Trapèze"],
		correctAnswer: 1,
		reference: "Muscles du cou, page 3",
	},
	{
		question:
			"Complétez : Le __________ est le principal muscle qui fléchit la hanche et participe à la flexion du genou.",
		options: ["Psoas-iliaque", "Droit antérieur", "Sartorius"],
		correctAnswer: 2,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Le muscle trapèze n'assure pas quelle fonction parmi les suivantes ?",
		options: [
			"Rétropulsion de l'épaule",
			"Rotation externe de l'épaule",
			"Élévation de l'épaule",
		],
		correctAnswer: 1,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Quel muscle est impliqué dans la supination de l’avant-bras ?",
		options: ["Biceps", "Triceps", "Deltoïde"],
		correctAnswer: 0,
		reference: "Muscles du bras, page 3",
	},
	{
		question:
			"Complétez : Le muscle __________ permet la flexion et la rotation controlatérale du tronc.",
		options: ["Oblique externe", "Transverse", "Carré des lombes"],
		correctAnswer: 0,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question: "Le muscle deltoïde permet quels mouvements de l'épaule ?",
		options: [
			"Flexion, abduction, extension",
			"Adduction, rotation interne, extension",
			"Flexion, rotation externe, abduction",
		],
		correctAnswer: 0,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Quelle est la fausse affirmation concernant le grand pectoral ?",
		options: [
			"Il est impliqué dans l'adduction du bras",
			"Il permet la flexion du coude",
			"Il assure la rotation interne de l'humérus",
		],
		correctAnswer: 1,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Complétez : Le muscle __________ s'insère sur la ligne blanche et participe à la compression abdominale lors de l'expiration.",
		options: ["Oblique interne", "Transverse", "Oblique externe"],
		correctAnswer: 1,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question: "Lequel de ces muscles est un extenseur du genou ?",
		options: ["Biceps fémoral", "Semi-membraneux", "Vaste interne"],
		correctAnswer: 2,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Quel muscle permet la flexion de la hanche et est situé sur la face antérieure de la cuisse ?",
		options: ["Psoas-iliaque", "Gracile", "Semi-tendineux"],
		correctAnswer: 0,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Complétez : Le muscle __________ s'étend de T7 à L5 et est un rétropulseur du bras.",
		options: ["Rhomboïdes", "Grand dorsal", "Trapèze"],
		correctAnswer: 1,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question: "Quelle est la principale fonction du muscle subscapulaire ?",
		options: [
			"Rotation interne du bras",
			"Abduction du bras",
			"Flexion du bras",
		],
		correctAnswer: 0,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question:
			"Complétez : Le muscle __________ est impliqué dans l'extension de la tête.",
		options: ["Splénius", "Sterno-cléido-mastoïdien", "Trapèze"],
		correctAnswer: 0,
		reference: "Muscles du cou, page 3",
	},
	{
		question:
			"Lequel de ces muscles participe à la flexion de l'avant-bras ?",
		options: ["Triceps", "Biceps", "Deltoïde"],
		correctAnswer: 1,
		reference: "Muscles du bras, page 3",
	},
	{
		question:
			"Quel muscle est impliqué dans l'abduction de la scapula et s'insère sur les côtes 1 à 9 ?",
		options: ["Grand pectoral", "Grand dentelé", "Petit pectoral"],
		correctAnswer: 1,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Complétez : Le __________ est responsable de la rétropulsion de l'épaule et est situé dans la région cervicale et thoracique.",
		options: ["Trapèze", "Grand dorsal", "Petit rond"],
		correctAnswer: 0,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question: "Lequel de ces muscles n'est pas un fléchisseur du genou ?",
		options: ["Semi-tendineux", "Vaste intermédiaire", "Biceps fémoral"],
		correctAnswer: 1,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Quel muscle fléchit le genou et s'insère sur la tubérosité tibiale ?",
		options: ["Sartorius", "Semi-membraneux", "Gracile"],
		correctAnswer: 0,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Complétez : Le muscle __________ participe à la flexion de la hanche et à la flexion du genou.",
		options: ["Sartorius", "Gracile", "Droit antérieur"],
		correctAnswer: 2,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Quel muscle permet la flexion latérale et la rotation homolatérale du tronc ?",
		options: ["Oblique interne", "Oblique externe", "Transverse"],
		correctAnswer: 0,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question: "Lequel de ces muscles n'est pas un extenseur du genou ?",
		options: ["Vaste externe", "Droit antérieur", "Semi-tendineux"],
		correctAnswer: 2,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question:
			"Complétez : Le __________ est un muscle rotateur externe de l'humérus, situé dans la fosse infra-épineuse.",
		options: ["Petit rond", "Infra-épineux", "Supra-épineux"],
		correctAnswer: 1,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question:
			"Quel muscle est impliqué dans l'adduction et la rotation interne de la hanche ?",
		options: ["Psoas-iliaque", "Gracile", "Grand fessier"],
		correctAnswer: 1,
		reference: "Muscles du tronc et du bassin, page 1",
	},
	{
		question: "Lequel de ces muscles est un abducteur du bras ?",
		options: ["Supra-épineux", "Petit rond", "Subscapulaire"],
		correctAnswer: 0,
		reference: "Muscles de la coiffe des rotateurs, page 2",
	},
	{
		question: "Lequel de ces muscles est un adducteur de la scapula ?",
		options: ["Petit pectoral", "Rhomboïdes", "Grand dentelé"],
		correctAnswer: 1,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Complétez : Le muscle __________ est un abducteur du bras et s'insère sur la tubérosité deltoïdienne de l'humérus.",
		options: ["Deltoïde", "Supra-épineux", "Infra-épineux"],
		correctAnswer: 0,
		reference: "Muscles de l'épaule et du bras, page 2",
	},
	{
		question:
			"Lequel de ces muscles participe à la rotation controlatérale de la tête ?",
		options: ["Trapèze", "Sterno-cléido-mastoïdien", "Splénius"],
		correctAnswer: 1,
		reference: "Muscles du cou, page 3",
	},
	// ... 59 autres questions ...
];
