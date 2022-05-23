    
function result() {
    gridOptions.api.setQuickFilter(
        document.getElementById('searchBox').value)
    
}

const columnDefs = [
    { field: "candidate_id", sortable: true, filter: true,  },
    { field: "name", sortable: true, filter: true,  },
    { field: "cctc", sortable: true, filter: true },
    { field: "ectc", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "id", sortable: true, filter: true },
    { field: "location", sortable: true, filter: true,  },
    { field: "notice_period", sortable: true, filter: true },
    { field: "working_at", sortable: true, filter: true },
    { field: 'years_of_exp', sortable: true, filter: true }
];

const autoGroupColumnDef = {
    headerName: "Model",
    field: "model",
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
}
// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: columnDefs,
    autoGroupColumnDef: autoGroupColumnDef,
    groupSelectsChildren: true,
    rowSelection: 'multiple',
    pagination: true,
    animateRows : true,
    paginationPageSize : 5,
};  



// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.getElementById('prem');
    new agGrid.Grid(gridDiv, gridOptions);
});

fetch('http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles')
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data);
    });

