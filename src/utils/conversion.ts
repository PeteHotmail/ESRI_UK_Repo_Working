
import wkt from "terraformer-wkt-parser";
import { geojsonToArcGIS } from "@esri/arcgis-to-geojson-utils";

// converts geometry
class Geometry {

    /**
     * convert a WK Geometry format to Esri
     * @param value the Well known geometry as a string
     */
    static WKTToEsri(value: string): any {
        const geojson = wkt.parse(value);
        const arcgis = geojsonToArcGIS(geojson);
        return arcgis;
    }

}

// {
//     "type" : "Coverage",
//     "domain" : {
//       "type" : "Domain",
//       "domainType" : "Grid",
//       "axes": {
//         "x" : { "start": 7, "stop": 14, "num": 4 },
//         "y" : { "start": 54, "stop": 48, "num": 4 }
//       },
//       "referencing": [{
//         "coordinates": ["x","y"],
//         "system": {
//           "type": "GeographicCRS",
//           "id": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
//         }
//       }]
//     },
//     "parameters" : {
//       "temperature": {
//         "type" : "Parameter",
//         "description": {
//           "en": "Air temperature measured in degrees Celsius."
//         },
//         "unit" : {
//           "label": {
//             "en": "Degree Celsius"
//           },
//           "symbol": {
//             "value": "Cel",
//             "type": "http://www.opengis.net/def/uom/UCUM/"
//           }
//         },
//         "observedProperty" : {
//           "id": "http://vocab.nerc.ac.uk/standard_name/air_temperature/",
//           "label" : {
//             "en": "Air temperature",
//             "de": "Lufttemperatur"
//           },
//           "description": {
//             "en": "Air temperature is the bulk temperature of the air, not the surface (skin) temperature."
//           }
//         }
//       }
//     },
//     "ranges" : {
//       "temperature" : {
//         "type" : "NdArray",
//         "dataType": "float",
//         "axisNames": ["y", "x"],
//         "shape": [4, 4],
//         "values" : [
//           17.3, 18.2, 16.5, 18.7,
//           18.1, 19.4, 17.2, 18.6,
//           19.2, 20.4, 21.1, 20.7,
//           21.1, 21.3, 20.5, 19.2
//         ]
//       }
//     }
//   }


// values

class CoverageJson {

    

}


export default Geometry;
