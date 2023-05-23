{finalData.map((object,index) => {
    count++;
    if(object.CustomerName === prevObject.CustomerName && object.VendorName === prevObject.VendorName && object.ShipToName === prevObject.ShipToName && object.CityName === prevObject.CityName && object.StateCode === prevObject.StateCode && object.LocationType === prevObject.LocationType && object.OrderNumber == prevObject.OrderNumber){
      prevObject = object;
      console.log("order number same")
      return <tr key={index}>
      <td rowSpan={2}>{object.CustomerName}</td>
      <td rowSpan={2}>{object.VendorName}</td>
      <td rowSpan={2}>{object.ShipToName}</td>
      <td rowSpan={2}>{object.Addr1}</td>
      <td rowSpan={2}>{object.CityName}</td>
      <td rowSpan={2}>{object.StateCode}</td>
      <td rowSpan={2}>{object.LocationType}</td>
      <td>{object.OrderNumber}</td>
      <td>{object.ProdDesc}</td>
      <td>{object.DeliveryDate}</td>
      <td style={{maxWidth: "160px"}}><i class='bx bxs-file-pdf'></i></td>
      <td>{object.ZipCode}</td>
      <td>{object.Gallons}</td>
      <td>{object.ProductPrice}</td>
      <td>{object.TaxPrice}</td>
      <td>{object.Latitude}</td>
      <td>{object.Longitude}</td>
      <td>{object.Fees}</td>
      <td>{object.AverageGross}</td>
      <td>{object.ProductID}</td>
      <td>{object.ProductUnitPrice}</td>
      <td>{object.TaxUnitPrice}</td>
      <td>{object.EnvironmentalFee}</td>
      <td>{object.OtherFee}</td>
      <td>{object.DeliveryFee}</td>
      <td>{object.EnvironmentalFee}</td>
      <td>{object.PageNumber}</td>
      <td>{object.TerminalGroupID}</td>
      <td>{object.LoadingTime}</td>
      <td>{object.SiteSetupTime}</td>
      <td>{object.CustomerID}</td>
    </tr>
    }else if(object.CustomerName === prevObject.CustomerName && object.VendorName === prevObject.VendorName && object.ShipToName === prevObject.ShipToName && object.CityName === prevObject.CityName && object.StateCode === prevObject.StateCode && object.LocationType === prevObject.LocationType && object.OrderNumber != prevObject.OrderNumber){
      prevObject = object;
      console.log("order number is different")
      return <tr key={index}>
      <td rowSpan={2}>{object.CustomerName}</td>
      <td rowSpan={2}>{object.VendorName}</td>
      <td rowSpan={2}>{object.ShipToName}</td>
      <td rowSpan={2}>{object.Addr1}</td>
      <td rowSpan={2}>{object.CityName}</td>
      <td rowSpan={2}>{object.StateCode}</td>
      <td rowSpan={2}>{object.LocationType}</td>
      <tr>
        <td>{object.OrderNumber}</td>
        <td>{object.ProdDesc}</td>
        <td>{object.DeliveryDate}</td>
        <td><i class='bx bxs-file-pdf'></i></td>
        <td>{object.ZipCode}</td>
        <td>{object.Gallons}</td>
        <td>{object.ProductPrice}</td>
        <td>{object.TaxPrice}</td>
        <td>{object.Latitude}</td>
        <td>{object.Longitude}</td>
        <td>{object.Fees}</td>
        <td>{object.AverageGross}</td>
        <td>{object.ProductID}</td>
        <td>{object.ProductUnitPrice}</td>
        <td>{object.TaxUnitPrice}</td>
        <td>{object.EnvironmentalFee}</td>
        <td>{object.OtherFee}</td>
        <td>{object.DeliveryFee}</td>
        <td>{object.EnvironmentalFee}</td>
        <td>{object.PageNumber}</td>
        <td>{object.TerminalGroupID}</td>
        <td>{object.LoadingTime}</td>
        <td>{object.SiteSetupTime}</td>
        <td>{object.CustomerID}</td>
      </tr>
      <tr className='subRow'>
        <td>Sub Totals</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{object.ProductPrice}</td>
        <td>{object.TaxPrice}</td>
        <td></td>
        <td></td>
        <td>{object.Fees}</td>
        <td></td>
        <td></td>
        <td>{object.ProductUnitPrice}</td>
        <td>{object.TaxUnitPrice}</td>
        <td>{object.EnvironmentalFee}</td>
        <td>{object.OtherFee}</td>
        <td>{object.DeliveryFee}</td>
        <td>{object.EnvironmentalFee}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tr>
    }else{
      prevObject = object;
      return <tr key={index}>
    <td>{object.CustomerName}</td>
    <td>{object.VendorName}</td>
    <td>{object.ShipToName}</td>
    <td>{object.Addr1}</td>
    <td>{object.CityName}</td>
    <td>{object.StateCode}</td>
    <td>{object.LocationType}</td>
    <tr>
      <td>{object.OrderNumber}</td>
      <td>{object.ProdDesc}</td>
      <td>{object.DeliveryDate}</td>
      <td><i class='bx bxs-file-pdf'></i></td>
      <td>{object.ZipCode}</td>
      <td>{object.Gallons}</td>
      <td>{object.ProductPrice}</td>
      <td>{object.TaxPrice}</td>
      <td>{object.Latitude}</td>
      <td>{object.Longitude}</td>
      <td>{object.Fees}</td>
      <td>{object.AverageGross}</td>
      <td>{object.ProductID}</td>
      <td>{object.ProductUnitPrice}</td>
      <td>{object.TaxUnitPrice}</td>
      <td>{object.EnvironmentalFee}</td>
      <td>{object.OtherFee}</td>
      <td>{object.DeliveryFee}</td>
      <td>{object.EnvironmentalFee}</td>
      <td>{object.PageNumber}</td>
      <td>{object.TerminalGroupID}</td>
      <td>{object.LoadingTime}</td>
      <td>{object.SiteSetupTime}</td>
      <td>{object.CustomerID}</td>
    </tr>
    <tr className='subRow'>
      <td>Sub Totals</td>
      <td></td>
      <td></td>
      <td style={{maxWidth: "160px"}}></td>
      <td></td>
      <td></td>
      <td>{object.ProductPrice}</td>
      <td>{object.TaxPrice}</td>
      <td></td>
      <td></td>
      <td>{object.Fees}</td>
      <td></td>
      <td></td>
      <td>{object.ProductUnitPrice}</td>
      <td>{object.TaxUnitPrice}</td>
      <td>{object.EnvironmentalFee}</td>
      <td>{object.OtherFee}</td>
      <td>{object.DeliveryFee}</td>
      <td>{object.EnvironmentalFee}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tr>
    }
    // prevObject = object;
    
    // prevObject.CustomerName = object.CustomerName;
    // prevObject.VendorName = object.VendorName;
    // prevObject.CityName = object.CityName;
    // prevObject.StateCode = object.StateCode;
    // prevObject.LocationType = object.LocationType;
    // prevObject.OrderNumber = object.OrderNumber;
  })}

  ////
  {
    obj.count.map((subObj,index) => {
      const date = new Date(subObj.DeliveryDate);
      let d = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
      return <tr key={index}>
        <td>{subObj.OrderNumber}</td>
        <td>{subObj.ProdDesc}</td>
        <td>{d}</td>
        <td><i className='bx bxs-file-pdf'></i></td>
        <td>{subObj.Gallons}</td>
        <td>{subObj.ProductPrice}</td>
        <td>{subObj.TaxPrice}</td>
        <td>{subObj.Latitude}</td>
        <td>{subObj.Longitude}</td>
        <td>{subObj.Fees}</td>
        <td>{subObj.AverageGross}</td>
        <td>{subObj.ProductID}</td>
        <td>{subObj.ProductUnitPrice}</td>
        <td>{subObj.TaxUnitPrice}</td>
        <td>{subObj.EnvironmentalFee}</td>
        <td>{subObj.OtherFee}</td>
        <td>{subObj.DeliveryFee}</td>
        <td>{subObj.EnvironmentalFee}</td>
        <td>{subObj.PageNumber}</td>
        <td>{subObj.TerminalGroupID}</td>
        <td>{subObj.LoadingTime}</td>
        <td>{subObj.SiteSetupTime}</td>
        <td>{subObj.CustomerID}</td>
      </tr>
    })
  }
  </td>