/* resCom-light.js *//*05/2017
/* attached to comCode Projects from prismalide.com
/* license : BSD 2 modified (3 additions)
/* version: 1-*
/* invasion javascript: global => resComlight
/* compatibility: IE>8
/* To include/edit in your code
/***/

"use strict"
try{"".a = "";console.log("resCode","not in strict mode")}catch(e){};

    //______ resComlight ___//License code: BSD 2 modified. From prismalide.com, resCom-light gitHub for details 
    function resComlight ( resourcesTypes, resources, resourceObject ){ ///décode instructions resComlight
        resourceObject = resourceObject || resources
        if ( typeof resources == 'function' ) resources = resources.toString()
        var lines = resources.split( /\/[\/|*]!-/ ).reverse()
        if ( !( resources.substr(0,2) == '//' || resources.substr(0,2) == '/*' ) ) lines.pop()
        lines.every( function( c ){
            var index = c.indexOf( ':' )
            if ( index != -1 ){
                if ( resourcesTypes[ c.substr( 0, index  )] ){ //init nouvelle ressource
                    var index2 = c.indexOf( ' ', index )
                    if ( index2 == -1 ) index2 = index
                    var index3  = c.indexOf( '\n', index )
                    if ( index3 == -1 ) index2 = index
                    if ( index2 > index3 ) index2 = index3
                    console.log(( c.substr( c.length  - 1 ) == '\n' ? 1 : 0 ) )
                    resourceObject[ c.substr( ++index , index2-index  ).trim() ] = 
                            c.substr( ++index2, (c.length-index2-( c.substr( c.length  - 1 ) == '\n'  ? 1 : 0 ) ) )
                    return true
                    }
                }
            return true    
            })
        return resourceObject
        }

