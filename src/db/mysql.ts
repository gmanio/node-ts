import * as Sequelize from 'sequelize';
import { dbConnectConfig } from '../../config/db';

const sequelize = new Sequelize(
  dbConnectConfig
);

sequelize.define('employee', {
  emp_no: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  birth_date: {
    type: Sequelize.DATE,
    allowNull: true
  },
  hire_date: {
    type: Sequelize.DATE,
    allowNull: true
  },
  first_name: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  last_name: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  gender: {
    type: Sequelize.ENUM(),
    values: ['M', 'F'],
    allowNull: true
  }
}, {
  classMethods: {},
  tableName: 'employees',
  freezeTableName: true,
  underscored: true,
  timestamps: false
});

export { sequelize };

/*
1,emp_no,employees,employees,INT,binary,11,5,0
2,birth_date,employees,employees,DATE,binary,10,10,0
3,first_name,employees,employees,VARCHAR,utf8,14,13,0
4,last_name,employees,employees,VARCHAR,utf8,16,14,0
5,gender,employees,employees,ENUM,utf8,1,1,0
6,hire_date,employees,employees,DATE,binary,10,10,0
 */