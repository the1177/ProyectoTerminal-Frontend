import "antd/dist/antd.css";
import "./cotejo.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

function Cotejo() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      indicador: "Reconoce la estructura",
      logro1: "En su totalidad",
      logro2: "La mayor parte",
    },
    {
      id: 2,
      indicador: "Esquema de palnificación",
      logro1: "Organiza y etiende",
      logro2: "Organiza",
    },
    {
      id: 3,
      indicador: "Borradores",
      logro1: "Integra borradores",
      logro2: "Integra la mayoria de borradores",
    },
    {
      id: 4,
      indicador: "Interpretación",
      logro1: "Logra interpretar",
      logro2: "Logra interpretar la mayoria",
    },
  ]);
  const [columns, setColumns] = useState([
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Indicadores",
      dataIndex: "indicador",
    },
    {
      key: "3",
      title: "Muy bien",
      dataIndex: "logro1",
    },
    {
      key: "4",
      title: "Bien",
      dataIndex: "logro2",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ]);

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  const addColumn = () => {
    const editableColumns = [...columns];
    editableColumns.push({
      tittle: "NewColumn"
    });
    setColumns(editableColumns);
    setIsEditing(false);
    setEditingStudent(null);
  };

  
  return (
    <div className="Cotejo">
      <header className="Cotejo-header">
        <Button onClick={onAddStudent}>Agrega un nuevo Indicador</Button>
        <Button onClick={addColumn}>Agrega una nueva columna</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.indicador}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, indicador: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.logro1}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, logro1: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.logro2}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, logro2: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Cotejo;