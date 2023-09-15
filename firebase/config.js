import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBeyeuZqys1mLl0Urp9SCrvPPlf4U7bK8s",
    authDomain: "miniblog-42687.firebaseapp.com",
    projectId: "miniblog-42687",
    storageBucket: "miniblog-42687.appspot.com",
    messagingSenderId: "123688350231",
    appId: "1:123688350231:web:2d16d499baf05953226252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o banco de dados da Firestore que é onde vamos salvar os dados
const db = getFirestore(app)

// Por fim vamos exportar o banco de dados
export { db }

/* Basicamente o que este arquivo está fazendo é chamando o pacote 
do firebase passando as suas keys e dominios que utilizamos para fazermos
o acesso e inserir os dados e autenticar os usuários.. */