var app = angular.module('app', []);


app.controller('controller', function($scope, $http) {
    console.log('Entrou');
    $scope.descricao="";
    $scope.valor=0;
    $scope.lancamentos=[];

    $scope.cliente={};




    //carrega questoes
    $scope.atualizaCliente = function(){
      $http.get('https://api.mlab.com/api/1/databases/ifscbank/collections/clientes?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff').
              then(function(response) {
                console.log('rolou');
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                  $scope.cliente = response.data[i];
                  if($scope.cliente.lancamentos == undefined){

                    console.log('Lancamento nao existe');
                      $scope.cliente.lancamentos = new Array();
                  }
                }
                console.log($scope.cliente);
              });
    }




    $scope.adicionaLancamento = function(){
      console.log('Lançando valor');
        $scope.novoLancamento={
            descricao: $scope.descricao,
            valor: $scope.valor,
            data: new Date()
          };
        $scope.cliente.lancamentos.push($scope.novoLancamento);
        $http({
                  method: 'PUT',
                  url: 'https://api.mlab.com/api/1/databases/ifscbank/collections/clientes?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff',
                  data: $scope.cliente
                });

                console.log('Lançando valor - Fim');

      };

      $scope.saque = function(){
          $scope.descricao = "SAQUE ATM";

          $scope.valor = $scope.valor * -1;
          $scope.cliente.saldo = $scope.cliente.saldo + $scope.valor;

          $scope.adicionaLancamento();
          $scope.update();
      }


      $scope.removerLancamento = function(obj){

            var index = $scope.cliente.lancamentos.indexOf(obj);
            if (index > -1) {
                $scope.cliente.lancamentos.splice(index, 1);
            }
            $http({
                      method: 'POST',
                      url: 'https://api.mlab.com/api/1/databases/ifscbank/collections/cliente?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff',
                      data: $scope.cliente
                    });

      };

      $scope.update = function(){
        $http({
                  method: 'PUT',
                  url: 'https://api.mlab.com/api/1/databases/ifscbank/collections/clientes?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff',
                  data: $scope.cliente
                });
      }

      $scope.atualizaCliente();




});
