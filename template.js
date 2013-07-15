module.exports = '<div class=\'fs\'>\n\n  <header>\n    <bread-crumbs path=\'path\'></bread-crumbs>\n  </header>\n\n  <div ng-controller=\'DirectoriesCtrl\'>\n\n    <h2><i class=\'icon-folder-close-alt\'></i> Directories</h2>\n\n    <div class=\'row\' >\n      <form ng-submit=\'create()\'>\n        <input type=\'text\' placeholder=\'New directory name\' ng-model=\'directory_name\' required />\n      </form>\n    </div>\n\n    <div class=\'row\' ng-controller=\'DirectoryCtrl\' ng-repeat=\'directory in directories\'>\n\n      <div class=\'col1\'>\n        <input type=\'checkbox\' ng-change=\'select(directory, s)\' ng-model=\'s\' />\n      </div>\n\n      <div class=\'col2\'>\n        <input class=\'inline\' type=\'text\' \n               ng-model=\'directory.name\' \n               ng-focus=\'storeName(directory)\' \n               ng-blur=\'update(directory)\' \n               ng-readonly=\'directory.readonly\' \n               ng-dblclick=\'visit(directory)\' \n               ng-click=\'enableRead(directory)\'/>\n  \n      </div>\n\n      <div class=\'col3\'>\n        <button ng-click=\'remove(directory);\'><i class=\'icon-trash\'></i></button>\n      </div>\n\n  </div>\n\n  <div class=\'files\' ng-controller=\'FilesCtrl\'>\n\n    <h2><i class=\'icon-file-text-alt\'></i> Files</h2>\n\n    <fileupload class=\'upload\' url=\'path\' files=\'uploaded_files\'></fileupload>   \n\n    <div class=\'row file\' ng-controller=\'FileCtrl\' ng-repeat=\'file in files\'>\n\n      <div class=\'col1\'>\n        <input type=\'checkbox\' ng-change=\'select(file, s)\' ng-model=\'s\' />\n      </div>\n\n      <div class=\'col2\'>\n        <input class=\'inline\' type=\'text\' ng-model=\'file.name\' ng-focus=\'storeName(file)\' ng-blur=\'update(file)\' ng-readonly=\'file.readonly\' ng-click=\'enableRead(file)\' ng-dblclick=\'preview(file)\' />\n      </div>\n\n      <div class=\'col3\' ng-show=\'file.uploading\'>{{file.progress}}%</div>\n\n      <div class=\'col3\' ng-show=\'!file.uploading\'>\n        <button ng-click=\'remove(file)\'><i class=\'icon-trash\'></i></button>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n';