// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework
// Copyright: ©2011 OpenMFG LLC, d/b/a xTuple
// ==========================================================================
/*globals Postbooks XM sc_assert */

Postbooks.sprites = {
  'triangle-down-large': 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAIAAAAy3EnLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAH9JREFUeNpi/P//PwMpgAWIV6xY8eXLFzQJHh6eiIgI7BqAYM6cOWgSBQUFWG1ghDgpMDDw+fPncFFJScn169dj1cAEoVJSUpBF0bhYNHh7ewNNhRsP5OL09X8YOHv2rDkYHDhw4D9uwALXaQQGQIa9vT2BYCXG6eihRDwACDAAgolJxW7rE1wAAAAASUVORK5CYII=',
  'text-field-left-enabled': 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAWCAYAAAAILVbQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOTJCMEEyMUY4QjEzMEUyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNUM0MEI0Qjg1NkMxMUUxOTAxMEQ4OUNFM0MwOUYyNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNUM0MEI0QTg1NkMxMUUxOTAxMEQ4OUNFM0MwOUYyNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkE3RjExNzQwNzIwNjgxMTg4QzZDQkU0MEQ4NzI0QzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTkyQjBBMjFGOEIxMzBFMjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6nO7nPAAAAwklEQVR42mL8//8/Awj8OzhdiOHnVy8QmwUssKl+wf+rO+PeMfIxMjExMbD829Pv8f/ipviLRsUMglrWDOzsbECVv75bPOdSYhDVs2eQkpJiYGZmhmgHMZjY2MA0CDCBCEZGCIYBJgYsYOgLQoMUXfA/w9+//xhgAc7CwMzyiuHnZ4Z3794x8PDwMLCysjIw/j0wjef/le2vb/yT5GBQsmRg5RFkYARp+bd/iizD24dLGD481WX4/YOd8T+6LUAAEGAAKa1CIapVcrUAAAAASUVORK5CYII=',
  'text-field-middle-enabled': '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',
  'text-field-right-enabled': 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAWCAYAAAAILVbQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExOTJCMEEyMUY4QjEzMEUyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNTc0OTU1ODg1NkQxMUUxOTAxMEQ4OUNFM0MwOUYyNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNTc0OTU1Nzg1NkQxMUUxOTAxMEQ4OUNFM0MwOUYyNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkU3RjExNzQwNzIwNjgxMTg4QzZDQkU0MEQ4NzI0QzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTkyQjBBMjFGOEIxMzBFMjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O4ZwSAAAAtUlEQVR42mL4u7M75u/ufov///8zwDDj6063/6y/vjDwSim9YVC2Umeyz3zH9D1yDsMD32kM1z6xijC8vLWdAQiYZGRkGBQUFBgYFEwZGL6+UwALMjIyMrCysjKwsbEzwAATnMHEiCmIDIapIChg//79ixD89u0bw4cP74Gh9oqBgYXtG0iQ5eGJ7Qy/nl5j0H+wjoHBJGwGSJDx77TArwx8Ys8YRFXamNxK5oMFQeahA4AAAwAeGUHaKqCTiwAAAABJRU5ErkJggg==',
  'tile-texture': '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',
  'carousel-texture': 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADXFJREFUeNqUWuFy47wNpEjZ6XN2On3/vz5LVAEssFrJuXxp7ibjyBQJAgtgAXL993//M+c85lx6X8fa+2xttLa/Xps9sef25bZv8dViT1pr9tme9N7ff972pz1v9WOD7ffoX61v9u5Y2775c75oK+3bxif82bed82z7vo6B2exft6G1NH4gLT67EP69S48nY9tf254L2Fw2BaXv+dD/mRz20Lc+D/sKosdMyz5fEHHG6mNdsWoM9rUx+REPbtLHPoeviwmXzh3a4BChPx5PfbLEwikcZsBa7/cb03H2WevpYiO2br9NLFtYVRWSdcwff26QGL8hoo2xd/GZZqTc0AjnxySmP6jDBcAu4w+Tw9Cyw8QQDlqfsVE8p6YJA0gAmR6PBxaDlBiGbcfzFXsAOG0YdI+RtjSFwYqYjRs+YiJMAjF8q/a377I97P33a1J6+86+cvAsuQeCElvnvPghVGhcNRoGvF4v4mdxjdyRM93sf2AxuEGCpF6xP8MC/qINeDwfPcVqb5vdPM+xHTDwt6CMI3fvuIzXvkYq5mV7Lt302XRXhMSR1tsxZUiQCLTlFTb23/QFfANCNVX5yeQwh4aNtA8rnPIId+N3AYZnSrltUKwZNGe070Nc82tDnD13mWz6baYpenP/8XEt8O3PEbIAP3oXww7B4y7nYK4wZXP2fGtvU2OJDd7etsbmKkGsBHbh0P71vvnaMTs0CgAcFUmefflXSD8qhBE/EM6eQ1Z8lkA8oGNEG/uMUBEoOohGF3TtDFbcVeg6n6zvuac7hzXszTlPzHAlgtXxEAM8D5joPXHictSYVFL4K+wDT3UtzB1ZoreJBfUV9902j5IuQvyCmcMn/Z9BZQuwzfd2uJX3eYuVgGx51VFRzHy9QxP4jDxAR4R2MR5Zgm4gM3+fJZaaWYMBQ1PBZnk+HojuNtp8/dVmfPsYFfvWUNKEZIzoQEt8M0fr5VIbVtIwwriJuI7ITZf9fZZgJIQHY3vmk3/eb4RXc0v7vAaWECQ7kGOrUhMa0TVrYjEaYcl3D6gN7gizhB124h5w+jZLzDIsaQLFMK0bWr6+vpzOtA7b0i1TfMzC8Ach+GPRBazGJcvlJjMlAnOkpC34yCBkARj1/v8rS8CbEQwh0ntuZ84eafxV7ZUA6A91fBjK/jKZ4WeOtJ6spl1/6DM9XA2fj8CexRNV0/nVupqzekpakjvCRKb1nLP4H2IAKQLePWMZNWEaogIc9D3xQ05xgylz0yersZnxxExHEuFPktmBBd6zBEzkQTycFfEAJCBYcJI3wH7NJCLcprLBkjnr3JgLvZfildPeWA0UvPoMQ5kS3QNIQ5agYyhHqsEbjZBIGJ2JDBtbybwZT2CaKf7kiwlYIA2lV1aD8fhMWv/LLMGZsWdPr0c6G+ZZKmTNM6IsXeGLuBaImhoNzjTU2idywGp0P5Ivjx+yRAm0KB1CyIf0oDlkski11AgLhpwFqd6mVhKL4E10UkqSasNAhjYTvXVVJCb8IUs49ItoJH0sTYFKBsVYQ7aVQLJghezGtNtpHcqn+Kb5kCWopJPVxFywBvLDcGWt5bLfZ4l3/Jiy6FGIJST6EHc44USOyjDgD8agQleNhpSb0DdmwgVc0NlueHVlLCalYXE5Kqyj9k2YZeESWaKcDbTX3j2kzLjVvqONouL+ru2WdBUGdEW0uR7vvY3lVmXDjSA9XdY/dKHvSX17bKmRCP4yS7D2TbIotS8x08JfIb3CwbWzVbQcXtSumiYZSZlEaVbFa8VXHfarLKGO9HPt+1maYy0WEkEU+smiYBotFAmeG6uB5rgluAdoBWsGzgC5KZ+WbMhWEFqRDMWjUIF9kFUpAyDkmzGqs8tKqZgAj0Zu8n4NQRRLJf4hS1wKyAD9WpSGySdnc9MWu5kZWI+Snntw5VpB8y1YZdyqLp5Zdki2Fg77tyyhD6nUW3OAhVRvXcMu6wEwy+CUjeXrqvkPQ2nlZMVXfksyrFvVRCtE9x9qX2ONJ5RdtqJ6/u+MHMjcEMN/h2u3tZxnEyoKaRglCc1D+M8t2vasKRam0nbLEn+vfaWhYlT/tLCm86XYvpqX/SgX+6ukPHN4TaHFlCKbWeIG99yJLLax8lg6/FUHs1VIwkzYsB8D+sDW0GhZ42Nk4E0KLmWjQeIXYO64BnXwbQ1KGhn1IaMk2sOmeHY0tFI1Lo0XtWeKrIIu8qxi0Gv+WyCmFm+pwCfqSad/kyWkd9I/I6lVhtjwDYrUpUY8iAibSMe21TYWDkvKpPBSBgaQsAL8OUsItCaqYdIvIkdnk3YBmxe9KpVxsu7IaGyI3IoQpyRKm3kUwDKit0Ghf5klaEDSBLb0NJHd+qq9djgv0dw7lkvRIXaWiN60AOcC+c6QEpHOpwblvpjymywhBUchfLlskkYo4OQkVvtCZeygIMYj6s/+DZXSzkAHL2A4cyIpfGONSTxffmAMUzB6fOYypiFi/axCCsdRP22MQhkZe6+ENdETAZ/TWpczZE2M3wzPjt0Z1Xf3TAF2qflYK9ez0dAu2ee2JW3Ueb8kuvqO0kIIxdpjnrmFidY2ovPNCKYnOl4eZFUm3T9bCahFmmqQq4pR7sGJvnT6NWOQ/9Doan1U2LPIOW2oGUZzxdvHj88gidI3zhH2E0X24dEHWnlp897qdCvZ8hIrj9mYJQB6FCh36a+F78lqAvRvk77ICLMk+i6qU/jDWuWISXhi3puMAfGXib74qU4vxEPljP2wNU54zCjL6kaAoZPcoi3X5oUXFcVSTkrYdAdJILtd8KaM35ULhLeB7b1c5vSH9Rkl/DLbCNigf93COrfe8kyuMjWeCCnIyure5+Ppp5whaEdRXYVNJMWe7gdaCGKSPZsVvTewwW6wObw+0KNcBEr6GabY3KaXqoDxdAoRuCi7SrYk/UppI27EicG4pYvQSz78k8Qhe1TYw2q8tOcs0/W3t3nlnq2fxyHnaYCzziWc2LKYb2UKAx8g9LGbvU22FS6sxr60yDjGHvvfImnSlZnIz3OtkN4D1+6H2LRJn3U+59kkzljZRs9ujJgYut+qJRaVh6NuSOfClw+/xwrj76zGQYs5Q5dojI92MgW0e9U3nNtFzPSjhtmiyDQfGJcWXYbkeTtoODLlxf8MGixDbnxd6HW0tS+sBtpl7mN8BA+wCvF4pycAUdq9Rc7ewit2s/HaV7NjE8u21VsU3ha2gNO84GxzZzcGBvUOXPsuSwisb6zG3SDb9Of5NjyYJ4IIJ1tE2HfEGZ50YeQZmiwzPL0lFmyt3C6PXlrjjQZH5ZoFVPBL/+fO137KEnkC6zs7WQ323MpPHn1okcTWHa4OAFHIGFrBcmSc9o1sCxxy+4LaYgy5xubI/tWm/DlLFBp9PwcoRrn1rUNRhHzTbgX2GSFx144d+gOm/WJA28Wx5tmQubsdZ5kyWBtSmiXOtG+e0zKG2Oe2Vx+p3wvcpc6usdDZeb7QHGf3Hk+9o5z+2dGFbVf4ammiDCyC31TnZh9XWe5bzpHyBhE47Fhulyy0Y7CVss9+2XEOg/uujGB1Er7yEslnc+rWjYvTTG8eNDli+DZLrAgUJoor7aOh4BM0nJY34U5aimRHo41qhnfEqO2Ki7xuwyx749W3Mxt2YavxjWsv9yyBNIehTvjKnRLf6Aq3cbZG5s5e740LedwL0DMJWvmvNP4Bj1Tdw/2TL8RFjvP+QZc0NJ3CXmqlNtm3OnfuZ3szt1r4BjVQbsdeN8Nlnl6zsDzdcrm0CXtcztIzKdQNhfijmk2XsqMlGz7l1izhzy2h1jEPb/4oPflgNVuXb+u6zAPnMVyat0r0mNmfmpmOa3TDaNLu2/FeRMbGVritZNkTV6GwN5WeTewuzRzcEmhSyhK9Fa/93NtkYIdBG1Zs22RFxhhMI2ZsluOZeb0xCBo36+qQ5SUNjXX97Kkc4eIqQddP4Y7Ge0rwV7/XId1fuQu2weznCQvPnG/XAnC8Rcbio+IyFwsd30RdvdEjQP5GtY6U93lFLTsRMPuSXKtXM68S//aZT1naA7crlfTsD1544qWQroVFiJbhCKTh2pVp197T0S51hXaIL6ymFkUA0F4iggeZgXaqmTdwp28x6dlWiGM5jxsPP2iY7JXrXa9yr0XbJB7e691rn70CQKUoeiTO2Bid8z4lOx3X+1U4xHzHi+eZH33XXJlxZkpfBBoCEUIhhouFWRO5zy4aYVR6BS7jvbIaFf0zN+OQc5G8uWQuTRt2xDEgHtctwAV4vgKtd6b6kB4+g9pCpVcfUBJ/O+JPwNS9N5YTvFLyCbnz8OHjbCU9tVe7HKiA6VP6OpUAO1MvRBjtcmjwyWrOTtm1DdrlopaGb15b0Z7kUVvVRIFCHB75ZdDCOAS4p/dWvphW875rGFRv0V3c63qe9wOrmZUuiFW99whmjut+zLAZF2OSYCKNyo1Y2188drdfq5+7P3C1MdDp8cxm1CvTpEZkrHveFfkrq4FkDP8IkTonEZLXyuNPd9bCIa9IaBUK/dksA54RpfSTF3Zxz5er8pJGWKNa3tFQ+BurwXoPnskVr7xdVaER9IoMSofMUdeytvJ8/58AAwCyA1V5nTdWlAAAAABJRU5ErkJggg=='

};

Postbooks.dataUrls = {};
Postbooks.createDataUrlForSprite = function(key) {
  var dataUrl = this.dataUrls[key];

  if (dataUrl === undefined) {
    var data = this.sprites[key];
    if (data) {
      dataUrl = this.dataUrls[key] = 'url(data:image/png;base64,'+data+')';
    } else {
      console.log('Could not retrieve sprite named "' + key + '"');
      dataUrl = this.dataUrls[key] = null;
    }
  }

  return dataUrl;
};

Postbooks.images = {};
Postbooks.createImageForSprite = function(key) {
  var image = this.images[key];

  if (image === undefined) {
    var data = this.sprites[key];
    if (data) {
      var dataUrl = 'data:image/png;base64,'+data;
      image = this.images[key] = new Image();
      image.src = dataUrl;
      console.log('creating image with key', key);
    } else {
      image = this.images[key] = null;
    }
  } else console.log('image with key already exists', key);

  return image;
};

SC.ready(function() {
  // precreate all images
  // debugger;
  for (var key in Postbooks.sprites) {
    if (!Postbooks.sprites.hasOwnProperty(key)) continue;
    Postbooks.createImageForSprite(key);
  }
});