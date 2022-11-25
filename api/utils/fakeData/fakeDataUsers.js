const fakeDataUsers = [
    {
      userName: "User Adm",
      email: "useradm@gmail.com",
      salt: "$2b$16$Wth1j5Xi.SmlTjuyUDBvs.",
      password: "$2b$16$Wth1j5Xi.SmlTjuyUDBvs.0KJ1y8ds09bsWhMq2k/9USnB93Oni/i",
      isAdmin: true,
    },
    {
      userName: "User Test1",
      email: "usertest@gmail.com",
      salt: "$2b$16$UURmmNOPpezO6aFvYIep1.",
      password: "$2b$16$UURmmNOPpezO6aFvYIep1.icSfTOoTr7XXNzLSByjM4VQsyZPmJNK",
      favorites: [ 1, 3, 5],
    },
    {
      userName: "User Test2",
      email: "usertes2t@gmail.com",
      salt: "$2b$16$UURmmNOPpezO6aFvYIep1.",
      password: "$2b$16$UURmmNOPpezO6aFvYIep1.icSfTOoTr7XXNzLSByjM4VQsyZPmJNK",
      favorites: [ 2, 4, 6],
    },
  ];
  
  module.exports = fakeDataUsers;
  