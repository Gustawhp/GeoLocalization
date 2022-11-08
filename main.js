const findMyState = () => {
  const status = document.querySelector('.status');

  const success = position => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoApiUrl = `http://api.bigdatacloud.net/data/reverse-geocode-client?lantitude=${latitude}&longtitude=${longitude}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => {
        status.textContent = data.city;
      });
  };
  const error = () => {
    status.textContent = 'unable';
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector('.find-state').addEventListener('click', findMyState);
