const fs = require("fs");

// fs propose 3 versions de ses fonctions
// synchrone
try {
  const data = fs.readFileSync(".editorconfig", { encoding: "utf-8" });
  fs.writeFileSync(".editorconfig.copy", data);
  console.log("copy sync done");
} catch (err) {
  console.log(err);
}

// asynchrone basée sur des callbacks
// callback hell / pyramid of doom
// voir http://callbackhell.com/
fs.readFile(".editorconfig", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".editorconfig.copy", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("copy async callback done");
      }
    });
  }
});

// asynchrone basée sur des promesses
// fs.promises.readFile().then(function() {})
fs.promises
  .readFile(".editorconfig", { encoding: "utf-8" })
  .then((data) => fs.promises.writeFile(".editorconfig.copy", data))
  .then(() => console.log("copy async promise done"))
  .catch((err) => console.log(err));

// ES2017 (async / await)
async function copy() {
  const data = await fs.promises.readFile(".editorconfig", {
    encoding: "utf-8",
  });
  await fs.promises.writeFile(".editorconfig.copy", data);
}

copy()
  .then(() => console.log("copy async await done"))
  .catch((err) => console.log(err));

// Stage 3 TC39 (Top level await)
// try {
//   const data = await fs.promises.readFile(".editorconfig", { encoding: "utf-8" });
//   await fs.promises.writeFile(".editorconfig.copy", data);
//   console.log("copy top level await done");
// } catch (err) {
//   console.log(err);
// }
