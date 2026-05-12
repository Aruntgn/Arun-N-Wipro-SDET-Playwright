interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<User, "email" | "password">

const preview: UserPreview = {
    name: "Arun",
    id: "xyz"
}

// preview.password;