import { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import appRoot  from "app-root-path";

export default (_: NextApiRequest, res: NextApiResponse) => {
    var dir = appRoot.path + "/file-browser" + _.body.dir, 
		r = '<ul class="jqueryFileTree" style="display: none;">';

   	try {
       	r = '<ul class="jqueryFileTree" style="display: none;">';

		var dirDecoded = decodeURIComponent(dir),
			files = fs.readdirSync(dirDecoded);

		files.forEach(function(f){
			var ff = dirDecoded + "/" + decodeURIComponent(f),
				ffEncoded = dir + "/" + encodeURIComponent(f),
				stats = fs.statSync(ff);

            if (stats.isDirectory()) { 
                r += '<li class="directory collapsed"><a href="#" rel="' + ffEncoded + '/">' + f + '</a></li>';
            } else {
            	var e = f.split('.')[1];
				
             	r += '<li class="file ext_' + e + '"><a href="#" rel='+ ffEncoded + '>' + f + '</a></li>';
            }
		});
		r += '</ul>';
	} catch(e) {
		r += 'Could not load directory: ' + dirDecoded;
		r += '</ul>';
	}

    res.status(200).send(r);
}