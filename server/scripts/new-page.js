const inquirer = require("inquirer"),
    fs = require("fs"),
    appRoot = require('app-root-path'),
    open = require('open'),
    capitalize = str => {
        return str.replace(/\w\S*/g, txt => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },
    formatPageName = rawPageName => {
        return capitalize(rawPageName.replace(/-/g, " ")).replace(/ /g, "");
    },
    generatePageTemplate = pageName => {
        return `import Head from "next/head";
import Page from "layouts/Page/Page";

export default function ${ formatPageName(pageName) }() {
    return (
        <Page>
            <Head>
                <title>${ capitalize(pageName.replace("-", " ")) }</title>
                <meta name="description" content="My Awesome Description" />
            </Head>
            <main id="${ pageName }">
                Content goes here!
            </main>
        </Page>
    );
}
        `;
    },
    generateeScssTemplate = pageName => {
        return `#${ pageName } {
}
        `;
    },
    openFile = async (filePath) => {
        await open(filePath, { app: { name: "Visual Studio Code" } });
    };

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter page name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Page path: ",
            name: "path"
        }
    ])
    .then(answers => {
        if (answers.name.length === 0) {
            console.log("Please enter a name. Aborting.");
            return;
        } 

        if (answers.path.length === 0) {
            console.log("Please page path. Aborting.");
            return;
        } 

        const pageName =  answers.name.replace(/\s+/g, "-").toLowerCase(),
            pageFullPath = appRoot + "/pages" + answers.path;

        if (fs.existsSync(pageFullPath)) {
            console.log("Page directory already exists. Aborting.");
            return;
        }

        fs.mkdirSync(pageFullPath, { recursive: true });
        fs.writeFileSync(pageFullPath + "/index.js", generatePageTemplate(pageName));
        fs.writeFileSync(pageFullPath + "/" + pageName + ".scss", generateeScssTemplate(pageName));
        fs.appendFileSync(appRoot + "/assets/scss/app.scss", '\n@import "pages' + answers.path + '/' + pageName + '.scss";');
        console.log("Page created successfully!");
        openFile(pageFullPath + "/index.js");
    });