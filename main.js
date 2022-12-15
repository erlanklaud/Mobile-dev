  function download1(){
    axios({
      url:'https://images.pexels.com/photos/2807495/pexels-photo-2807495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image1.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }
  function download2(){
    axios({
      url:'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image2.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }

  function download3(){
    axios({
      url:'https://images.pexels.com/photos/2823936/pexels-photo-2823936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image3.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }
  function download4(){
    axios({
      url:'https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image4.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }


    function download5(){
    axios({
      url:'https://images.pexels.com/photos/3149896/pexels-photo-3149896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image5.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }
  function download6(){
    axios({
      url:'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image6.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }

  function download7(){
    axios({
      url:'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image7.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }
  function download8(){
    axios({
      url:'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      method:'GET',
      responseType: 'blob'
  })

  .then((response) => {
      const url = window.URL
      .createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image8.jpg');
          document.body.appendChild(link);
          link.click();
  })
  }
