import React, { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
  const Menu = [
    {
      nome: "Dashboard",
      icon: "bx bx-home-circle",
      outlet: [
        {
          nome: "Pessoa",
          icon: "",
          link: "pessoa",
        },
        {
          nome: "Crypto",
          icon: "",
          link: "crypto",
        },
        {
          nome: "Saas",
          icon: "",
          link: "saas",
        },
      ],
    },
    {
      nome: "Contas",
      icon: "bx bxs-user",
      link: "",
      outlet: [
        {
          nome: "Nova",
          icon: "",
          link: "conta-adicionar",
        },
        {
          nome: "Todas as contas",
          icon: "",
          link: "toda-conta",
        },
        {
          nome: "Minha conta",
          icon: "",
          link: "",
        },
        {
          nome: "Contas Visualizadas Recentemente",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Contactos",
      icon: "bx bxs-user-detail",
      link: "",
      outlet: [
        {
          nome: "Novo",
          icon: "",
          link: "contacto-adicionar",
        },
        {
          nome: "Todos os Contactos",
          icon: "",
          link: "todos-contacto",
        },
        {
          nome: "Meu Contacto",
          icon: "",
          link: "",
        },
        {
          nome: "Contactos Visualizadas Recentemente",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Leads",
      icon: "bx bx-user-pin",
      link: "",
      outlet: [
        {
          nome: "Nova",
          icon: "",
          link: "lead-adicionar",
        },
        {
          nome: "Todas as Leads Abertas",
          icon: "",
          link: "toda-leads",
        },
        {
          nome: "Minha Lead",
          icon: "",
          link: "",
        },
        {
          nome: "Lead De Hoje",
          icon: "",
          link: "",
        },
        {
          nome: "Leads Visualizadas Recentemente",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Reclamações",
      icon: "fas fa-headset ",
      link: "",
      outlet: [
        {
          nome: "Nova",
          icon: "",
          link: "reclamacao-adicionar",
        },
        {
          nome: "Todas Reclamaçoes em Abertas",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Oprotunidade",
      icon: "bx bx-trophy",
      link: "",
      outlet: [
        {
          nome: "Nova Oportunidade",
          icon: "",
          link: "oportunidade-adicionar",
        },
        {
          nome: "Todas as Oportunidades",
          icon: "",
          link: "",
        },
        {
          nome: "Oportunidade fecha no Proximo mês",
          icon: "",
          link: "",
        },
        {
          nome: "Oportunidade fechada esse mês",
          icon: "",
          link: "",
        },
        {
          nome: "Leads Visualizadas Recentemente",
          icon: "",
          link: "",
        },
        {
          nome: "Minha Oportunidade",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Calendarioa",
      icon: "bx bx-calendar",
      link: "",
    },
    {
      nome: "Notas",
      icon: "bx bx-note",
      link: "",
      outlet: [
        {
          nome: "Minhas notas",
          icon: "",
          link: "",
        },
      ],
    },
    {
      nome: "Projectos",
      icon: "bx bxs-briefcase",
      link: "",
      outlet: [
        {
          nome: "Todos os Projectos",
          icon: "",
          link: "",
        },
      ],
    },

    {
      nome: "Tarefas",
      icon: "bx bxs-calendar-check",
      link: "",
      outlet: [
        {
          nome: "Todas as Tarefas",
          icon: "",
          link: "toda-tarefa",
        },

        {
          nome: "Tarefas Abertas",
          icon: "",
          link: "",
        },
        {
          nome: "Actualizar Tarefa",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefas Entraso",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefa Recentemente Concliuda",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefas Vistas Rcentementes",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefas em Execução",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefas de Hoje",
          icon: "",
          link: "",
        },
        {
          nome: "Tarefas não programadas",
          icon: "",
          link: "",
        },
      ],
    },
    {
      nome: "Relatorios",
      icon: "bx bxs-notepad",
      link: "",
    },
    {
      nome: "Files",
      icon: "bx bx-file",
      link: "",
    },
    {
      nome: "Email",
      icon: "bx bx-envelope",
      link: "email-inbox",
    },
    {
      nome: "Grupo",
      icon: "bx bx-group",
      link: "",
      outlet: [
        {
          nome: "Grupos Activos",
          icon: "",
          link: "",
        },
        {
          nome: "Meu grupo",
          icon: "",
          link: "",
        },
      ],
    },
    {
      nome: "Citações",
      icon: "bx bx-pencil",
      link: "",
    },

    {
      nome: "Menu",
      icon: "bx bx-menu",
      link: "",
      outlet: [
        {
          nome: "Novo",
          icon: "",
          link: "menu-adicionar",
        },
        {
          nome: "Listagem",
          icon: "",
          link: "",
        },
      ],
    },
  ];
  const [menu, setMenu] = useState(-1);
  function activateParentDropdown(item: number) {
    setMenu(item);
  }

  return (
    <div className="vertical-menu" style={{ backgroundColor: "#2a3042" }}>
      <div data-simplebar="init" className="h-100">
        <div className="simplebar-wrapper" style={{ margin: "0px;" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "-14px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div id="sidebar-menu" className="mm-active">
                    <ul
                      className="metismenu list-unstyled mm-show"
                      id="side-menu"
                    >
                      <li className="menu-title" key="t-menu">
                        Menu
                      </li>
                      {Menu?.map((dados, index) => {
                        //has-arrow waves-effect
                        if (index == 0) {
                          return (
                            <li>
                              <a
                                href="/"
                                onClick={(e) => {
                                  e.preventDefault();
                                  activateParentDropdown(index);
                                }}
                                className="waves-effect"
                              >
                                <i className="bx bx-home-circle"></i>
                                <span className="badge rounded-pill bg-info float-end">
                                  0{index}
                                </span>
                                <span key="t-dashboards">{dados.nome}</span>
                              </a>
                              {dados?.outlet && (
                                <ul
                                  className={
                                    menu == index
                                      ? `sub-menu mm-collapse mm-show`
                                      : `sub-menu mm-collapse`
                                  }
                                  aria-expanded="false"
                                >
                                  {dados.outlet.map((data, indexs) => (
                                    <li key={indexs}>
                                      <Link href={data?.link}>
                                        <a key="t-default">{data?.nome}</a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        } else {
                          return (
                            <li>
                              {dados?.outlet ? (
                                <a
                                  href="/"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    activateParentDropdown(index);
                                  }}
                                  className={
                                    dados?.outlet
                                      ? "has-arrow waves-effect"
                                      : ""
                                  }
                                >
                                  <i className={dados?.icon}></i>

                                  <span key="t-dashboards">{dados.nome}</span>
                                </a>
                              ) : (
                                <Link href={dados?.link}>
                                  <a
                                    onClick={(e) => {
                                      activateParentDropdown(index);
                                    }}
                                    className={
                                      dados?.outlet
                                        ? "has-arrow waves-effect"
                                        : ""
                                    }
                                  >
                                    <i className={dados?.icon}></i>

                                    <span key="t-dashboards">{dados.nome}</span>
                                  </a>
                                </Link>
                              )}

                              {dados?.outlet && (
                                <ul
                                  className={
                                    menu == index
                                      ? `sub-menu mm-collapse mm-show`
                                      : `sub-menu mm-collapse`
                                  }
                                  aria-expanded="false"
                                >
                                  {dados.outlet.map((data, indexs) => (
                                    <li key={indexs}>
                                      <Link href={data?.link}>
                                        <a key="t-default">{data?.nome}</a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: "1321px" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: "60px",
              transform: "translate3d(0px, 0px, 0px)",
              display: "block",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
