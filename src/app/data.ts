import { DataUtil } from "@syncfusion/ej2-data";

export function getData(dataCount?: number): object {
   let check: boolean[] = [true, false];
   let nombres: string[] = [
       'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
       'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
       'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];
   let designacion: string[] = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead']
   let ubicacion: string[] = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico']
   let tradeData: any = [];
   if (typeof dataCount === 'string') {
       dataCount = parseInt(dataCount);
   }
   for (let i: number = 1; i <= dataCount; i++) {
       let code = 10000;
       
       tradeData.push({
           'check': check[Math.floor(Math.random() * check.length)],
           'EmployeeID': code + i,
           'nombres': nombres[Math.floor(Math.random() * nombres.length)],
           'designacion': designacion[Math.floor(Math.random() * designacion.length)] + '  ' + designacion[Math.floor(Math.random() * designacion.length)],
           'ubicacion': ubicacion[Math.floor(Math.random() * ubicacion.length)],
       })

 
   }

   return tradeData;
 }

let order = JSON.stringify([
   {
      "OrderID":10248,
      "CustomerID":"VINET",
      "CustomerName": "Maria ",
      "OrderDate":"1996-07-04T00:00:00.000Z",
      "ShippedDate":"1996-07-16T00:00:00.000Z",
      "Freight":32.38,
      "ShipName":"Vins et alcools Chevalier",
      "ShipAddress":"59 rue de l'Abbaye",
      "ShipCity":"Reims",
      "ShipRegion":null,
      "ShipCountry":"France"
   },
   {
      "OrderID":10249,
      "CustomerID":"TOMSP",
      "CustomerName": "Ana Trujillo",
      "OrderDate":"1996-07-05T00:00:00.000Z",
      "ShippedDate":"1996-07-10T00:00:00.000Z",
      "Freight":11.61,
      "ShipName":"Toms Spezialitäten",
      "ShipAddress":"Luisenstr. 48",
      "ShipCity":"Münster",
      "ShipRegion":null,
      "ShipCountry":"Germany"
   },
   {
      "OrderID":10250,
      "CustomerID":"HANAR",
      "CustomerName": "Antonio Moreno",
      "OrderDate":"1996-07-08T00:00:00.000Z",
      "ShippedDate":"1996-07-12T00:00:00.000Z",
      "Freight":65.83,
      "ShipName":"Hanari Carnes",
      "ShipAddress":"Rua do Paço, 67",
      "ShipCity":"Rio de Janeiro",
      "ShipRegion":"RJ",
      "ShipCountry":"Brazil"
   },
   {
      "OrderID":10251,
      "CustomerID":"VICTE",
      "CustomerName": "Thomas Hardy",
      "OrderDate":"1996-07-08T00:00:00.000Z",
      "ShippedDate":"1996-07-15T00:00:00.000Z",
      "Freight":41.34,
      "ShipName":"Victuailles en stock",
      "ShipAddress":"2, rue du Commerce",
      "ShipCity":"Lyon",
      "ShipRegion":null,
      "ShipCountry":"France"
   },
   {
      "OrderID":10252,
      "CustomerID":"SUPRD",
      "CustomerName": "Christina Berglund",
      "OrderDate":"1996-07-09T00:00:00.000Z",
      "ShippedDate":"1996-07-11T00:00:00.000Z",
      "Freight":51.3,
      "ShipName":"Suprêmes délices",
      "ShipAddress":"Boulevard Tirou, 255",
      "ShipCity":"Charleroi",
      "ShipRegion":null,
      "ShipCountry":"Belgium"
   },
   {
      "OrderID":10253,
      "CustomerID":"HANAR",
      "CustomerName": "Hanna Moos",
      "OrderDate":"1996-07-10T00:00:00.000Z",
      "ShippedDate":"1996-07-16T00:00:00.000Z",
      "Freight":58.17,
      "ShipName":"Hanari Carnes",
      "ShipAddress":"Rua do Paço, 67",
      "ShipCity":"Rio de Janeiro",
      "ShipRegion":"RJ",
      "ShipCountry":"Brazil"
   },
   {
      "OrderID":10254,
      "CustomerID":"CHOPS",
      "CustomerName": "Frédérique Citeaux",
      "OrderDate":"1996-07-11T00:00:00.000Z",
      "ShippedDate":"1996-07-23T00:00:00.000Z",
      "Freight":22.98,
      "ShipName":"Chop-suey Chinese",
      "ShipAddress":"Hauptstr. 31",
      "ShipCity":"Bern",
      "ShipRegion":null,
      "ShipCountry":"Switzerland"
   },
   {
      "OrderID":10255,
      "CustomerID":"RICSU",
      "CustomerName": "Martín Sommer",
      "OrderDate":"1996-07-12T00:00:00.000Z",
      "ShippedDate":"1996-07-15T00:00:00.000Z",
      "Freight":148.33,
      "ShipName":"Richter Supermarkt",
      "ShipAddress":"Starenweg 5",
      "ShipCity":"Genève",
      "ShipRegion":null,
      "ShipCountry":"Switzerland"
   },
   {
      "OrderID":10256,
      "CustomerID":"WELLI",
      "CustomerName": "Laurence Lebihan",
      "OrderDate":"1996-07-15T00:00:00.000Z",
      "ShippedDate":"1996-07-17T00:00:00.000Z",
      "Freight":13.97,
      "ShipName":"Wellington Importadora",
      "ShipAddress":"Rua do Mercado, 12",
      "ShipCity":"Resende",
      "ShipRegion":"SP",
      "ShipCountry":"Brazil"
   },
   {
      "OrderID":10257,
      "CustomerID":"HILAA",
      "CustomerName": "Elizabeth Lincoln",
      "OrderDate":"1996-07-16T00:00:00.000Z",
      "ShippedDate":"1996-07-22T00:00:00.000Z",
      "Freight":81.91,
      "ShipName":"HILARION-Abastos",
      "ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35",
      "ShipCity":"San Cristóbal",
      "ShipRegion":"Táchira",
      "ShipCountry":"Venezuela"
   },
   {
      "OrderID":10258,
      "CustomerID":"ERNSH",
      "CustomerName": "Victoria Ashworth",
      "OrderDate":"1996-07-17T00:00:00.000Z",
      "ShippedDate":"1996-07-23T00:00:00.000Z",
      "Freight":140.51,
      "ShipName":"Ernst Handel",
      "ShipAddress":"Kirchgasse 6",
      "ShipCity":"Graz",
      "ShipRegion":null,
      "ShipCountry":"Austria"
   },
   {
      "OrderID":10259,
      "CustomerID":"CENTC",
      "CustomerName": "Patricio Simpson",
      "OrderDate":"1996-07-18T00:00:00.000Z",
      "ShippedDate":"1996-07-25T00:00:00.000Z",
      "Freight":3.25,
      "ShipName":"Centro comercial Moctezuma",
      "ShipAddress":"Sierras de Granada 9993",
      "ShipCity":"México D.F.",
      "ShipRegion":null,
      "ShipCountry":"Mexico"
   },
   {
      "OrderID":10260,
      "CustomerID":"OTTIK",
      "CustomerName": "Francisco Chang",
      "OrderDate":"1996-07-19T00:00:00.000Z",
      "ShippedDate":"1996-07-29T00:00:00.000Z",
      "Freight":55.09,
      "ShipName":"Ottilies Käseladen",
      "ShipAddress":"Mehrheimerstr. 369",
      "ShipCity":"Köln",
      "ShipRegion":null,
      "ShipCountry":"Germany"
   },
   {
      "OrderID":10261,
      "CustomerID":"QUEDE",
      "CustomerName": "Yang Wang",
      "OrderDate":"1996-07-19T00:00:00.000Z",
      "ShippedDate":"1996-07-30T00:00:00.000Z",
      "Freight":3.05,
      "ShipName":"Que Delícia",
      "ShipAddress":"Rua da Panificadora, 12",
      "ShipCity":"Rio de Janeiro",
      "ShipRegion":"RJ",
      "ShipCountry":"Brazil"
   }]);

   export const orderDetails: Object[] = JSON.parse(order, (field, value) => {
      let dupValue = value;
      if (typeof value === 'string' && /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*){1})([zZ]|([+\-])(\d\d):?(\d\d))?$/.test(value)) {
          let arr = dupValue.split(/[^0-9]/);
          value = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, 
          parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10));
      }
      return value;
   });