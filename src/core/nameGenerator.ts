export function getName() {
    const firstNames = [
        "Emma",
        "Liam",
        "Olivia",
        "Noah",
        "Ava",
        "Isabella",
        "Sophia",
        "Mia",
        "Charlotte",
        "Amelia",
        "Harper",
        "Evelyn",
        "Abigail",
        "Emily",
        "Elizabeth",
        "Sofia",
        "Avery",
        "Ella",
        "Scarlett",
        "Grace",
        "Chloe",
        "Victoria",
        "Riley",
        "Aria",
        "Lily",
        "Hannah",
        "Layla",
        "Lila",
        "Zoe",
        "Samantha",
        "Addison",
        "Natalie",
        "Luna",
        "Brooklyn",
        "Zoey",
        "Penelope",
        "Bella",
        "Stella",
        "Nova",
        "Everly",
        "Leah",
        "Aubrey",
        "Willow",
        "Eleanor",
        "Nora",
        "Hazel",
        "Maya",
        "Ellie",
        "Paisley",
        "Hailey",
    ];

    const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Miller",
        "Davis",
        "Garcia",
        "Rodriguez",
        "Martinez",
        "Hernandez",
        "Lopez",
        "Gonzalez",
        "Wilson",
        "Anderson",
        "Thomas",
        "Taylor",
        "Moore",
        "Jackson",
        "Martin",
        "Lee",
        "Perez",
        "Thompson",
        "White",
        "Harris",
        "Sanchez",
        "Clark",
        "Ramirez",
        "Lewis",
        "Robinson",
        "Walker",
        "Young",
        "Hall",
        "Allen",
        "King",
        "Wright",
        "Scott",
        "Torres",
        "Nguyen",
        "Hill",
        "Adams",
        "Nelson",
        "Baker",
        "Hall",
        "Rivera",
        "Mitchell",
        "Carter",
        "Green",
        "Turner",
        "Phillips",
        "Campbell",
    ];

    return [randomElement(firstNames), randomElement(lastNames)];

    function randomElement(arr: string[]): string {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}
