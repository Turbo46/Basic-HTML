function removeList()
    {
    var hapus=document.getElementById("Select");
    hapus.remove(hapus.selectedIndex);
    }

    function Add() {
        var ddl = document.getElementById("Select");
        var option = document.createElement("OPTION");
        option.innerHTML = document.getElementById("txtText").value;
        ddl.options.add(option);
    }