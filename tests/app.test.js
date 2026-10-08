import { describe, it, expect } from "vitest";
import {
  createTask,
  isValidTask,
  filterTasks,
  getTaskStats
} from "../js/taskManager.js";

describe("isValidTask", () => {
  it("accepta una tasca amb text", () => {
    expect(isValidTask("Aprendre GitHub")).toBe(true);
  });

  it("rebutja una tasca buida", () => {
    expect(isValidTask("")).toBe(false);
  });

  it("rebutja una tasca formada només per espais", () => {
    expect(isValidTask("   ")).toBe(false);
  });
// NUEVO TEST DE VALIDAR
  it("rebutja una tasca amb @",()=>{
    expect(isValidTask("Aprendre @ GitHub")).toBe(false);
  });
  
});

describe("createTask", () => {
  it("crea una tasca pendent", () => {
    const task = createTask("Fer els tests");

    expect(task.text).toBe("Fer els tests");
    expect(task.completed).toBe(false);
    expect(task.id).toBeDefined();
  });
  // NUEVA CREATE TASK
  it("eliminar espacio",() =>{
    expect(createTask("  Nova  ").text).toBe("Nova");
  })
});

describe("filterTasks", () => {
  const tasks = [
    { id: 1, text: "Tasca pendent", completed: false },
    { id: 2, text: "Tasca completada", completed: true },
    //NUEVO FILTRO
    {id:3,text: "1234", completed : false}
  ];

  it("retorna totes les tasques", () => {
    expect(filterTasks(tasks, "all")).toHaveLength(3);
  });

  it("retorna només les tasques pendents", () => {
    expect(filterTasks(tasks, "pending")).toHaveLength(2);
  });

  it("retorna només les tasques completades", () => {
    expect(filterTasks(tasks, "completed")).toHaveLength(1);
  });
  // NUEVO FILTRO
  it("retorna només les tasques que siguen solo numeros", ()=>{
    expect(filterTasks(tasks,"number")).toHaveLength(1);
  });
});

describe("getTaskStats", () => {
  it("calcula correctament les estadístiques", () => {
    const tasks = [
      { id: 1, text: "Una", completed: false },
      { id: 2, text: "Dues", completed: true },
      { id: 3, text: "Tres", completed: false }
    ];

    expect(getTaskStats(tasks)).toEqual({
      total: 3,
      pending: 2,
      completed: 1
    });
  });2
// NOVA TASCA CALCULAR TASCAS
  it("calcula el total de tascas",()=>{
    expect(getTaskStats([{completed:false},{completed:true}]).total).toBe(2);
  });
});
