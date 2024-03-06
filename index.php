<!--Link video: https://www.youtube.com/watch?v=Hg80AjDNnJk 20:13-->

<!DOCTYPE html>
<html lang="pr-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="image/favicon.ico" type="image/x-icon">
    <title>Typing and relax</title>
</head>
<body>
    <div class="content flex">
        <div class="content-body flex">
            <div id="text"> 
                <input type="text" id="input-field" autocomplete="off" > 
                <p class="font-paragrafo" id="adicionarTexto"></p>
            </div>
            <ul class="metricas flex font-destaque">
                <li class="tempo">
                    <p>TEMPO: <span></span>s</p>
                </li>
                <li class="tpm">
                    <p><abbr title="Palavras Por Minuto">PPM:</abbr> <span>0</span></p>
                </li>
                <li class="ppm">
                    <p><abbr title="Toques Por Minuto">TPM:</abbr> <span>0</span></p>
                </li>
                <li class="erros">
                    <p>ERROS: <span>0</span></p>  
                </li>
            </ul>
            <div class="buttons">
                <button class="font-destaque" id="button-reiniciar">Reininciar</button>
                <button class="font-destaque" id="button-finalizar">Finalizar</button>
            </div>
        </div>
    </div>

<script src="script.js"></script>
</body>
</html>