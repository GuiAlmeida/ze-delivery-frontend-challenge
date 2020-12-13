export default function (results) {
  const address = results[0].address_components;

  const postalCode = address.find(({ types }) => types.includes('postal_code'));

  const streetName = address.find(({ types }) => types.includes('route'));

  const streetNumber = address.find(({ types }) =>
    types.includes('street_number')
  );

  const city = address.find(({ types }) =>
    types.includes('administrative_area_level_2')
  );

  const state = address.find(({ types }) =>
    types.includes('administrative_area_level_1')
  );

  const district = address.find(({ types }) => types.includes('sublocality'));

  const country = address.find(({ types }) => types.includes('country'));

  return {
    postalCode: postalCode ? postalCode.long_name : '',
    streetName: streetName ? streetName.long_name : '',
    streetNumber: streetNumber ? streetNumber.long_name : '',
    district: district ? district.long_name : '',
    city: city ? city.long_name : '',
    uf: state ? state.short_name : '',
    state: state ? state.long_name : '',
    country: country ? country.long_name : '',
    lat: results[0].geometry.location.lat(),
    lng: results[0].geometry.location.lng()
  };
}
