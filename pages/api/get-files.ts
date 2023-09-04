import fs from 'fs';
import appRoot from 'app-root-path';
import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse) => {
  let dir = appRoot.path + '/file-browser' + _.body.dir;
  let r = '<ul class="jqueryFileTree" style="display: none;">';

  if (_.body.dir) {
    const dirSplit = dir.split(appRoot.path);

    if (dirSplit.length > 2) {
      dir = dirSplit[dirSplit.length - 1];
      dir = appRoot.path + dir;
    }
  }

  const dirDecoded = decodeURIComponent(dir);

  try {
    r = '<ul class="jqueryFileTree" style="display: none;">';

    const files = fs.readdirSync(dirDecoded);

    files.forEach(function (f) {
      const ff = dirDecoded + '/' + decodeURIComponent(f);
      const ffEncoded = dir + '/' + encodeURIComponent(f);
      const stats = fs.statSync(ff);

      if (stats.isDirectory()) {
        r +=
          '<li class="directory collapsed"><a href="#" rel="' +
          ffEncoded +
          '/">' +
          f +
          '</a></li>';
      } else {
        const e = f.split('.')[1];

        r +=
          '<li class="file ext_' +
          e +
          '"><a href="#" rel=' +
          ffEncoded +
          '>' +
          f +
          '</a></li>';
      }
    });
    r += '</ul>';
  } catch (e) {
    r += 'Could not load directory: ' + dirDecoded;
    r += '</ul>';
  }

  res.status(200).send(r);
};
