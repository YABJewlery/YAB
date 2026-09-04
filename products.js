const products = [
    {
        id: 21,
        name: "Colar Choloris",
        category: "Colares",
        badge: "Novidade",
        variants: [
            {
                material: "Ouro",
                price: 89.90,
                image: "",
                stock: false
            },
            {
                material: "Prata",
                price: 79.90,
                image: "",
                stock: false
            }
        ]
    },
    {
        id: 22,
        name: "Brinco Tríade",
        category: "Brincos",
        badge: "Novidade",
        variants: [
            {
                material: "Ouro",
                price: 46.90,
                image: "",
                stock: false
            },
            {
                material: "Prata",
                price: 43.90,
                image: "",
                stock: false
            }
        ]
    },
    {
        id: 23,
        name: "Colar Duplo Kairos",
        category: "Colares",
        badge: "Novidade",
        variants: [
            {
                material: "Ouro",
                price: 74.90,
                image: "",
                stock: false
            },
            {
                material: "Prata",
                price: 69.90,
                image: "",
                stock: false
            }
        ]
    },
    {
        id: 24,
        name: "Brinco Kairos",
        category: "Brincos",
        badge: "Novidade",
        variants: [
            {
                material: "Ouro",
                price: 46.90,
                image: "",
                stock: false
            },
            {
                material: "Prata",
                price: 43.90,
                image: "",
                stock: false
            }
        ]
    },
    {
        id: 1,
        name: "Anel Ondinhas",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 39.90,
                image: "anelondinhas.png",
                stock: false
            },
            {
                material: "Prata",
                price: 36.90,
                image: "anelondinhas1.png",
                stock: false
            }
        ]
    },
    {
        id: 2,
        name: "Anel Falange",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 49.90,
                image: "anelfalanger.png",
                stock: true
            },
            {
                material: "Prata",
                price: 0.00,
                image: "anelfalange.png",
                stock: false
            }
        ]
    },
    {
        id: 3,
        name: "Anel Canelado",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 49.90,
                image: "anelcanelado1.png",
                stock: true
            },
            {
                material: "Prata",
                price: 0.00,
                image: "anelcanelado.png",
                stock: false
            }
        ]
    },
    {
        id: 4,
        name: "Anel Abauladas",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 59.90,
                image: "anelpontasa.png",
                stock: false
            },
            {
                material: "Prata",
                price: 0.00,
                image: "anelpontas.png",
                stock: false
            }
        ]
    },
    {
        id: 5,
        name: "Anel Quadrado",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 54.90,
                image: "quadrado1.png",
                stock: false
            },
            {
                material: "Prata",
                price: 48.90,
                image: "quadrado.png",
                stock: false
            }
        ]
    },
    {
        id: 6,
        name: "Anel Giratorio",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 64.90,
                image: "anelgira.png",
                stock: true
            },
            {
                material: "Prata",
                price: 57.90,
                image: "anelgiral.png",
                stock: true
            }
        ]
    },
    {
        id: 7,
        name: "Anel Meia Lua",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 53.90,
                image: "anelmeial.png",
                stock: true
            },
            {
                material: "Prata",
                price: 46.90,
                image: "anelmeia.png",
                stock: true
            }
        ]
    },
    {
        id: 8,
        name: "Anel Placa liso",
        category: "Anéis",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 66.90,
                image: "anelplacalisa1.png",
                stock: true
            },
            {
                material: "Prata",
                price: 58.90,
                image: "anelplacalisa.png",
                stock: false
            }
        ]
    },
    {
        id: 9,
        name: "Brinco Argola Torcido",
        category: "Brincos",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 51.90,
                image: "argolatorc1.png",
                stock: false
            },
            {
                material: "Prata",
                price: 46.90,
                image: "argolatorc.png",
                stock: false
            }
        ]
    },
    {
        id: 10,
        name: "Brinco Gotinha Baby",
        category: "Brincos",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 34.90,
                image: "gotinhabay.jpeg",
                stock: true
            },
            {
                material: "Prata",
                price: 29.90,
                image: "gotinhababyp.jpeg",
                stock: true
            }
        ]
    },
    {
        id: 11,
        name: "Brinco Gota Riscado",
        category: "Brincos",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 49.90,
                image: "brincogotariscado1.png",
                stock: true
            },
            {
                material: "Prata",
                price: 38.90,
                image: "brincogotariscado.png",
                stock: true
            }
        ]
    },
    {
        id: 12,
        name: "Brinco Retangulo",
        category: "Brincos",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 45.90,
                image: "retanguloduplo.png",
                stock: false
            },
            {
                material: "Prata",
                price: 40.90,
                image: "retanguloduplo1.png",
                stock: true
            }
        ]
    },
    {
        id: 13,
        name: "Choker fita",
        category: "Colares",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 89.90,
                image: "chokerfita1.png",
                stock: true
            },
            {
                material: "Prata",
                price: 0.00,
                image: "chokerfita.png",
                stock: true
            }
        ]
    },
    {
        id: 14,
        name: "Colar Coração Liso",
        category: "Colares",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 49.90,
                image: "colarcoracaoliso.png",
                stock: true
            },
            {
                material: "Prata",
                price: 0.00,
                image: "colarcoracaol.png",
                stock: false
            }
        ]
    },
    {
        id: 15,
        name: "Brinco Argola Torcido P",
        category: "Brincos",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 42.90,
                image: "argolapequena.jpg.jpeg",
                stock: true
            },
            {
                material: "Prata",
                price: 36.90,
                image: "argolapequenaP.jpg.jpeg",
                stock: true
            }
        ]
    },
    {
        id: 16,
        name: "Colar Octagonal Verde",
        category: "Colares",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 75.90,
                image: "colaroctagonalv1.png",
                stock: true
            },
            {
                material: "Prata",
                price: 69.90,
                image: "colaroctagonalv.png",
                stock: false
            }
        ]
    },
    {
        id: 17,
        name: "Colar Ponto de Luz",
        category: "Colares",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 59.90,
                image: "pontodeluz1.png",
                stock: false
            },
            {
                material: "Prata",
                price: 54.90,
                image: "pontodeluz.png",
                stock: true
            }
        ]
    },
    {
        id: 18,
        name: "Colar Veneziana",
        category: "Colares",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 59.90,
                image: "venezianabol1.png",
                stock: false
            },
            {
                material: "Prata",
                price: 0.00,
                image: "venezianabol.png",
                stock: false
            }
        ]
    },
    {
        id: 19,
        name: "Pulseira Coração",
        category: "Pulseiras",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 48.90,
                image: "coracaoverde.png",
                stock: true
            },
            {
                material: "Prata",
                price: 41.90,
                image: "coracaoverde1.png",
                stock: true
            }
        ]
    },
    {
        id: 20,
        name: "Pulseira de Mão",
        category: "Pulseiras",
        badge: "",
        variants: [
            {
                material: "Ouro",
                price: 44.90,
                image: "pulseirarisquinhoam.png",
                stock: false
            },
            {
                material: "Prata",
                price: 40.90,
                image: "pulseirarisquinhoam.png",
                stock: true
            }
        ]
    }
];

console.log(
    "Produtos carregados:",
    products.length
);
