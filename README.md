#Sistema de Control Covid. ABM de Vacunas. ABM de Cepas.

###########################################################################
#VACUNAS
###########################################################################

#Endpoint Alta Vacuna POST /Vaccines/

#Endpoint Traer Todas Las Vacunas GET /Vaccines/

#Endpoint Traer una Vacuna GET /Vaccines/{id}

#Endpoint Modificar Vacuna PUT /Vaccines/{id}

#Endpoint Borrar Vacuna DELETE /Vaccines/{id}

########################## D A T O S ######################################
#vacuna_id (autonum)
#vacuna_nombre(texto)
#vacuna_tipo (texto)
#vacuna_fabricante (texto)
#vacuna_cant_dosis(int)

###########################################################################
#MUTACIONES
###########################################################################

#Endpoint Alta Cepas POST /Strains/

#Endpoint Traer Todos Las Cepas GET /Strains/

#Endpoint Traer Todos Las Cepas para 1 Tipo de Vacuna GET /Vaccines/{id}/Strains/

#Endpoint Traer una Cepa GET /Strains/{id}

#Endpoint Modificar Cepa PUT /Strains/{id}

#Endpoint Borrar Cepa DELETE /Strains/{id}

########################## D A T O S ######################################
#mutacion_id(autonum)
#mutacion_nombre(texto)
#mutacion_tipo(texto)
#mutacion_pais_origen(texto)

