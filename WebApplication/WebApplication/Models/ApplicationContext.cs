﻿using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ApplicationContext
    {
        public ApplicationContext()
        {
            // Data Source=TRAN-VMWARE\SQLEXPRESS;Initial Catalog=simplehr;Persist Security Info=True;User ID=sa;Password=12345
            //
            string connString = @"Data Source=WIN-SIQP2PIBMR3\SQLEXPRESS;Database=psychological_health_db_AA;Trusted_Connection=True;";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            try
            {
                QueryUsers(conn);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: " + e);
                Console.WriteLine(e.StackTrace);
            }
            finally
            {
                // Закрыть соединение.
                conn.Close();
                // Разрушить объект, освободить ресурс.
                conn.Dispose();
            }

        }
        public List<Account> Accounts = new List<Account>();

        private void QueryUsers(SqlConnection conn)
        {
            string sql = "select Id, Email, Password, Roles from Accounts";

            // Создать объект Command.
            SqlCommand cmd = new SqlCommand();

            // Сочетать Command с Connection.
            cmd.Connection = conn;
            cmd.CommandText = sql;


            using (DbDataReader reader = cmd.ExecuteReader())
            {
                if (reader.HasRows)
                {

                    while (reader.Read())
                    {
                        Role[] r = new Role[] { Role.User };

                        if (reader.GetString("Roles").Equals("Admin"))
                            r = new Role[] { Role.Admin };

                        Accounts.Add(
                       new Account
                       {
                           Id = reader.GetGuid("Id"),//= Guid.Parse("e2371dc9-a849-4f3c-9004-df8fc921c13a"),
                            Email = reader.GetString("Email"),//"user@email.com",
                           Password = reader.GetString("Password"),
                           Roles = r
                       });
                      
                    }
                }
            }
        }
    }
}
