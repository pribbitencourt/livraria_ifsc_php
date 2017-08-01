<?php include("cabecalho.php");?>
<aside class="main-sidebar hidden-print">
    <section class="sidebar">
        <div class="user-panel"></div>
        <!-- Sidebar Menu-->
         <ul class="sidebar-menu">
            <li class="active"><a href="index.jsp"><i
                class="fa fa-home"></i><span> Pagina Inicial</span></a>
            </li>
            <li class="treeview"><a href="#"><i
                class="fa fa-shopping-basket"></i><span>Venda</span><i
                class="fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a href="/ProjetoFinal_Livraria/FrenteCaixa"><i
                        class="fa fa-circle-o"></i> Frente Caixa</a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"><i class="fa fa-book"></i><span>Produtos</span><i
                class="fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a href="/ProjetoFinal_Livraria/listaProdutos"><i
                        class="fa fa-circle-o"></i> Listar Produtos</a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"><i class="fa fa-edit"></i><span>Cadastros</span><i
                    class="fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a href="/ProjetoFinal_Livraria/CadastroProduto"><i
                        class="fa fa-circle-o"></i> Cadastro Produto</a>
                    </li>
                    <li class="treeview"><a href="#"><i
                        class="fa fa-circle-o"></i><span> Cadastro Cliente</span><i
                        class="fa fa-angle-right"></i></a>
                            <ul class="treeview-menu">
                                <li><a href="/ProjetoFinal_Livraria/CadastroClienteFisico"><i
                                    class="fa fa-circle-o"></i> Cliente Físico</a></li>
                                <li><a href="/ProjetoFinal_Livraria/CadastroClienteJuridico"><i
                                class="fa fa-circle-o"></i><span> Cliente Juridico</span></a></li>
                            </ul>
                    </li>
                </ul>
            </li>
         </ul>
    </section>
</aside>