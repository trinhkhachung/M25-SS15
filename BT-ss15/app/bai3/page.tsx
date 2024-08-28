import axios from 'axios';

const getWeatherDescription = (weathercode: number) => {
  switch (weathercode) {
    case 0:
      return 'Trời quang đãng';
    case 1:
      return 'Trời ít mây';
    case 2:
      return 'Trời có mây';
    case 3:
      return 'Trời nhiều mây';
    case 45:
    case 48:
      return 'Có sương mù';
    case 51:
    case 53:
    case 55:
      return 'Mưa phùn';
    case 61:
    case 63:
    case 65:
      return 'Mưa rào';
    case 66:
    case 67:
      return 'Mưa lạnh';
    case 71:
    case 73:
    case 75:
      return 'Có tuyết rơi';
    case 77:
      return 'Có hạt tuyết';
    case 80:
    case 81:
    case 82:
      return 'Có mưa rào';
    case 85:
    case 86:
      return 'Có mưa tuyết';
    case 95:
      return 'Có giông bão';
    case 96:
    case 99:
      return 'Có giông bão và mưa đá';
    default:
      return 'Thời tiết không xác định';
  }
};

const WeatherPage = async () => {
  const latitude = 21.0285;  
  const longitude = 105.8542;

  let weather = null;

  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: latitude,
        longitude: longitude,
        hourly: 'temperature_2m',
        current_weather: true
      }
    });
    weather = response.data.current_weather;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu thời tiết:', error);
  }

  if (!weather) {
    return <div>Không thể tải dữ liệu thời tiết.</div>;
  }

  const weatherDescription = getWeatherDescription(weather.weathercode);

  return (
    <div>
      <h1>Thời tiết hiện tại</h1>
      <p>Nhiệt độ: {weather.temperature}°C</p>
      <p>Thời tiết: {weatherDescription}</p>
    </div>
  );
};

export default WeatherPage;
