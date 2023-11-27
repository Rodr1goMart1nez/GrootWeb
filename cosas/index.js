let dataTable;
let dataTableIsInitialized = false;

const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await listClientes();

    dataTable = $("#datatable-clientes").DataTable({});

    dataTableIsInitialized = true;
};

const listClientes = async()=>{
    try{
        const response = await fetch('http://127.0.0.1:8000/list_clientes');
        const data = await response.json();
        let content = ``;
        data.Clientes.forEach((Clientes, index)=> {
            content+=`
                <tr>
                    <td>${Clientes.montoTrans}</td>
                    <td>${Clientes.fecha}</td>
                    <td>${Clientes.comercio}</td>
                    <td>${Clientes.numtarjeta}</td>
                    <td>${Clientes.nombreCliente}</td>
                    <td>${Clientes.emailCliente}</td>
                    <td>${Clientes.numeroCliente}</td>
                    <td>
                        <a href="enviarCliente/${Clientes.montoTrans}" class='btn btn-sm btn-primary'><i class="fa-solid fa-paper-plane fa-xl"></i></a>
                    </td>
                </tr>
            `;
        });
        tableBody_clientes.innerHTML = content;
    }catch(ex){
        alert(ex)
    }
};


window.addEventListener('load', async() => {
    await initDataTable();
});