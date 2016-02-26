import ServiceProxy from "./ServiceProxy";


ServiceProxy.connect("stdio", (tsservice) => {
    let fileName = __dirname + "/../sample/Test.ts";
	tsservice.open(fileName);
	tsservice.projectInfo(fileName, true)
		.then(console.log);
  	tsservice.projectInfo(fileName, true)
		.then(console.log);
  	// tsservice.completions(fileName, 4, 20)
	// 	.then(completions => {
    //         completions.forEach(completion => {
    //             console.log(completion.kind +" : "+completion.name )
    //         });
    //     });
    tsservice.geterr([fileName], 20)
        // .then(console.log)
});