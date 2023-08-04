-- CreateTable
CREATE TABLE "Location" (
    "postcode" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "geo_shape" TEXT NOT NULL,
    "geo_point" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("postcode")
);

-- CreateTable
CREATE TABLE "Emission" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "scope_1_kg_co2e" DOUBLE PRECISION NOT NULL,
    "scope_2_kg_co2e" DOUBLE PRECISION NOT NULL,
    "scope_3_kg_co2e" DOUBLE PRECISION NOT NULL,
    "total_emission_kg_co2e" DOUBLE PRECISION NOT NULL,
    "average_emissions_per_customer_kg_co2e" DOUBLE PRECISION NOT NULL,
    "average_emissions_per_customer_kg_co2e_per_day" DOUBLE PRECISION NOT NULL,
    "rest_of_municipality_emissions_kg_co2e" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Emission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cost" (
    "id" SERIAL NOT NULL,
    "total_gas_gj" DOUBLE PRECISION NOT NULL,
    "average_intensity_gj_per_customer_per_annum" DOUBLE PRECISION NOT NULL,
    "average_intensity_mj_per_customer_per_day" DOUBLE PRECISION NOT NULL,
    "average_intensity_kwh_per_customer_per_annum" DOUBLE PRECISION NOT NULL,
    "average_intensity_kwh_per_customer_per_day" DOUBLE PRECISION NOT NULL,
    "average_intensity_household_per_day" DOUBLE PRECISION NOT NULL,
    "average_intensity_household_per_month" DOUBLE PRECISION NOT NULL,
    "average_intensity_household_per_annum" DOUBLE PRECISION NOT NULL,
    "total_cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectricityUsage" (
    "id" SERIAL NOT NULL,
    "toal_electricity_kwh" DOUBLE PRECISION NOT NULL,
    "rest_of_municipality_total_electricity_kwh" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ElectricityUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GasUsage" (
    "id" SERIAL NOT NULL,
    "toal_gas_gj" DOUBLE PRECISION NOT NULL,
    "rest_of_municipality_total_gas_gj" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GasUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "year" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "costId" INTEGER NOT NULL,
    "gasUsageId" INTEGER NOT NULL,
    "electricityUsageId" INTEGER NOT NULL,
    "emissionId" INTEGER NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("year","postcode")
);

-- CreateIndex
CREATE UNIQUE INDEX "Record_costId_key" ON "Record"("costId");

-- CreateIndex
CREATE UNIQUE INDEX "Record_gasUsageId_key" ON "Record"("gasUsageId");

-- CreateIndex
CREATE UNIQUE INDEX "Record_electricityUsageId_key" ON "Record"("electricityUsageId");

-- CreateIndex
CREATE UNIQUE INDEX "Record_emissionId_key" ON "Record"("emissionId");

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_costId_fkey" FOREIGN KEY ("costId") REFERENCES "Cost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_gasUsageId_fkey" FOREIGN KEY ("gasUsageId") REFERENCES "GasUsage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_electricityUsageId_fkey" FOREIGN KEY ("electricityUsageId") REFERENCES "ElectricityUsage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_emissionId_fkey" FOREIGN KEY ("emissionId") REFERENCES "Emission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
