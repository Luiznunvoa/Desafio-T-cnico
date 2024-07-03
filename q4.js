const deuses = [
   { nome: "Zeus", panteao: "Grego", classe: "Mage", features: ["Raio", "Trovão"] },
   { nome: "Odin", panteao: "Nórdico", classe: "Warrior", features: ["Lança", "Gungnir"] },
   { nome: "Ra", panteao: "Egípcio", classe: "Mage", features: ["Sol", "Curas"] },
   { nome: "Vulcan", panteao: "Romano", classe: "Mage", features: ["Forja", "Mísseis"] },
   { nome: "Anubis", panteao: "Egípcio", classe: "Mage", features: ["Múmias", "Dano"] },
   { nome: "Hades", panteao: "Grego", classe: "Mage", features: ["Sombras", "Submundo"] },
   { nome: "Athena", panteao: "Grego", classe: "Guardian", features: ["Escudo", "Sabedoria"] },
   { nome: "Loki", panteao: "Nórdico", classe: "Assassin", features: ["Furtividade", "Trapaças"] },
 ];
 
 console.log("Q1:");
 deuses.forEach(deus => console.log(`${deus.nome}: ${deus.features.length} features`));
 
 console.log("\nQ2:");
 const deusesMid = deuses.filter(deus => deus.classe === "Mage" && deus.features.includes("Dano"));
 console.log(deusesMid);
 
 console.log("\nQ3:");
 const deusesOrdenados = deuses.sort((a, b) => a.panteao.localeCompare(b.panteao));
 console.log(deusesOrdenados);
 
 console.log("\nQ4:");
 const nomesEClasses = deuses.map(deus => `${deus.nome} (${deus.classe})`);
 console.log(nomesEClasses);