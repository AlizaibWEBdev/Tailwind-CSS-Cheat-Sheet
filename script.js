const data = {
    "color": {
      "color": {
        "example": "color: #FF0000;",
        "class": "text-red-500"
      },
      "background-color": {
        "example": "background-color: #FF0000;",
        "class": "bg-red-500"
      }
    },
    "typography": {
      "font-size": {
        "example": "font-size: 16px;",
        "class": "text-base"
      },
      "font-weight": {
        "example": "font-weight: 700;",
        "class": "font-bold"
      },
      "line-height": {
        "example": "line-height: 1.5;",
        "class": "leading-normal"
      },
      "text-align": {
        "example": "text-align: center;",
        "class": "text-center"
      },
      "text-transform": {
        "example": "text-transform: uppercase;",
        "class": "uppercase"
      },
      "letter-spacing": {
        "example": "letter-spacing: 0.1em;",
        "class": "tracking-wide"
      }
    },
    "spacing": {
      "margin": {
        "example": "margin: 1rem;",
        "class": "m-4"
      },
      "margin-top": {
        "example": "margin-top: 1rem;",
        "class": "mt-4"
      },
      "margin-right": {
        "example": "margin-right: 1rem;",
        "class": "mr-4"
      },
      "margin-bottom": {
        "example": "margin-bottom: 1rem;",
        "class": "mb-4"
      },
      "margin-left": {
        "example": "margin-left: 1rem;",
        "class": "ml-4"
      },
      "padding": {
        "example": "padding: 1rem;",
        "class": "p-4"
      },
      "padding-top": {
        "example": "padding-top: 1rem;",
        "class": "pt-4"
      },
      "padding-right": {
        "example": "padding-right: 1rem;",
        "class": "pr-4"
      },
      "padding-bottom": {
        "example": "padding-bottom: 1rem;",
        "class": "pb-4"
      },
      "padding-left": {
        "example": "padding-left: 1rem;",
        "class": "pl-4"
      }
    },
    "flexbox": {
      "flex-container": {
        "display": {
          "example": "display: flex;",
          "class": "flex"
        },
        "flex-direction": {
          "row": {
            "example": "flex-direction: row;",
            "class": "flex-row"
          },
          "row-reverse": {
            "example": "flex-direction: row-reverse;",
            "class": "flex-row-reverse"
          },
          "column": {
            "example": "flex-direction: column;",
            "class": "flex-col"
          },
          "column-reverse": {
            "example": "flex-direction: column-reverse;",
            "class": "flex-col-reverse"
          }
        },
        "flex-wrap": {
          "nowrap": {
            "example": "flex-wrap: nowrap;",
            "class": "flex-nowrap"
          },
          "wrap": {
            "example": "flex-wrap: wrap;",
            "class": "flex-wrap"
          },
          "wrap-reverse": {
            "example": "flex-wrap: wrap-reverse;",
            "class": "flex-wrap-reverse"
          }
        },
        "justify-content": {
          "flex-start": {
            "example": "justify-content: flex-start;",
            "class": "justify-start"
          },
          "flex-end": {
            "example": "justify-content: flex-end;",
            "class": "justify-end"
          },
          "center": {
            "example": "justify-content: center;",
            "class": "justify-center"
          },
          "space-between": {
            "example": "justify-content: space-between;",
            "class": "justify-between"
          },
          "space-around": {
            "example": "justify-content: space-around;",
            "class": "justify-around"
          },
          "space-evenly": {
            "example": "justify-content: space-evenly;",
            "class": "justify-evenly"
          }
        },
        "align-items": {
          "flex-start": {
            "example": "align-items: flex-start;",
            "class": "items-start"
          },
          "flex-end": {
            "example": "align-items: flex-end;",
            "class": "items-end"
          },
          "center": {
            "example": "align-items: center;",
            "class": "items-center"
          },
          "baseline": {
            "example": "align-items: baseline;",
            "class": "items-baseline"
          },
          "stretch": {
            "example": "align-items: stretch;",
            "class": "items-stretch"
          }
        },
        "align-content": {
          "flex-start": {
            "example": "align-content: flex-start;",
            "class": "content-start"
          },
          "flex-end": {
            "example": "align-content: flex-end;",
            "class": "content-end"
          },
          "center": {
            "example": "align-content: center;",
            "class": "content-center"
          },
          "space-between": {
            "example": "align-content: space-between;",
            "class": "content-between"
          },
          "space-around": {
            "example": "align-content: space-around;",
            "class": "content-around"
          },
          "stretch": {
            "example": "align-content: stretch;",
            "class": "content-stretch"
          }
        },
        "gap": {
          "example": "gap: 1rem;",
          "class": "gap-4"
        },
        "row-gap": {
          "example": "row-gap: 1rem;",
          "class": "gap-y-4"
        },
        "column-gap": {
          "example": "column-gap: 1rem;",
          "class": "gap-x-4"
        }
      },
      "flex-items": {
        "order": {
          "1": {
            "example": "order: 1;",
            "class": "order-1"
          },
          "2": {
            "example": "order: 2;",
            "class": "order-2"
          }
        },
        "flex-grow": {
          "example": "flex-grow: 1;",
          "class": "flex-grow"
        },
        "flex-shrink": {
          "example": "flex-shrink: 1;",
          "class": "flex-shrink"
        },
        "flex": {
          "1": {
            "example": "flex: 1 1 0%;",
            "class": "flex-1"
          },
          "auto": {
            "example": "flex: auto;",
            "class": "flex-auto"
          },
          "initial": {
            "example": "flex: initial;",
            "class": "flex-initial"
          },
          "none": {
            "example": "flex: none;",
            "class": "flex-none"
          }
        },
        "align-self": {
          "auto": {
            "example": "align-self: auto;",
            "class": "self-auto"
          },
          "flex-start": {
            "example": "align-self: flex-start;",
            "class": "self-start"
          },
          "flex-end": {
            "example": "align-self: flex-end;",
            "class": "self-end"
          },
          "center": {
            "example": "align-self: center;",
            "class": "self-center"
          },
          "baseline": {
            "example": "align-self: baseline;",
            "class": "self-baseline"
          },
          "stretch": {
            "example": "align-self: stretch;",
            "class": "self-stretch"
          }
        }
      }
    },
    "grid": {
      "display": {
        "example": "display: grid;",
        "class": "grid"
      },
      "grid-template-columns": {
        "example": "grid-template-columns: repeat(3, 1fr);",
        "class": "grid-cols-3"
      },
      "gap": {
        "example": "gap: 1rem;",
        "class": "gap-4"
      }
    },
    "sizing": {
      "width": {
        "example": "width: 100%;",
        "class": "w-full"
      },
      "height": {
        "example": "height: 100%;",
        "class": "h-full"
      },
      "max-width": {
        "example": "max-width: 100%;",
        "class": "max-w-full"
      },
      "max-height": {
        "example": "max-height: 100%;",
        "class": "max-h-full"
      },
      "min-width": {
        "example": "min-width: 100%;",
        "class": "min-w-full"
      },
      "min-height": {
        "example": "min-height: 100%;",
        "class": "min-h-full"
      }
    },
    "borders": {
      "border": {
        "example": "border: 1px solid #000;",
        "class": "border"
      },
      "border-width": {
        "example": "border-width: 2px;",
        "class": "border-2"
      },
      "border-color": {
        "example": "border-color: #000;",
        "class": "border-black"
      },
      "border-radius": {
        "example": "border-radius: 0.5rem;",
        "class": "rounded"
      }
    },
    "background": {
      "background-image": {
        "example": "background-image: url('image.jpg');",
        "class": "bg-[url('image.jpg')]"
      },
      "background-size": {
        "example": "background-size: cover;",
        "class": "bg-cover"
      },
      "background-position": {
        "example": "background-position: center;",
        "class": "bg-center"
      }
    },
    "shadow": {
      "box-shadow": {
        "example": "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);",
        "class": "shadow-lg"
      }
    },
    "opacity": {
      "opacity": {
        "example": "opacity: 0.5;",
        "class": "opacity-50"
      }
    },
    "position": {
      "position": {
        "example": "position: absolute;",
        "class": "absolute"
      },
      "top": {
        "example": "top: 0;",
        "class": "top-0"
      },
      "right": {
        "example": "right: 0;",
        "class": "right-0"
      },
      "bottom": {
        "example": "bottom: 0;",
        "class": "bottom-0"
      },
      "left": {
        "example": "left: 0;",
        "class": "left-0"
      },
      "z-index": {
        "example": "z-index: 10;",
        "class": "z-10"
      }
    },
    "cursor": {
      "cursor": {
        "example": "cursor: pointer;",
        "class": "cursor-pointer"
      }
    },
    "visibility": {
      "visibility": {
        "example": "visibility: hidden;",
        "class": "invisible"
      },
      "display": {
        "example": "display: none;",
        "class": "hidden"
      }
    }
  }
  
  
  function createTableFromJson(data) {
    const container = document.getElementById('table-container');
  
    for (const category in data) {
      const table = document.createElement('table');
      const caption = document.createElement('caption');
      caption.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      table.appendChild(caption);
  
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
  
      ['CSS Property', 'CSS Example', 'Tailwind Class'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
      });
  
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      const tbody = document.createElement('tbody');
  
      for (const property in data[category]) {
        const row = document.createElement('tr');
        
        const cell1 = document.createElement('td');
        cell1.textContent = property;
        row.appendChild(cell1);
  
        const cell2 = document.createElement('td');
        cell2.textContent = data[category][property].example;
        row.appendChild(cell2);
  
        const cell3 = document.createElement('td');
        cell3.textContent = data[category][property].class;
        row.appendChild(cell3);
  
        tbody.appendChild(row);
      }
  
      table.appendChild(tbody);
      container.appendChild(table);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createTableFromJson(data);
  });
  