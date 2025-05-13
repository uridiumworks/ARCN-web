import CustomContainer from "@/components/CustomContainer"
import Banner from "@/components/Mandate/Extension/Banner"
import NigeriaMap from "@/components/Mandate/Extension/nigeria-map"
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/Mandate/Extension/tabs"

export default function Extensions() {
  return (
    <main className="min-h-screen">
        <Banner/>
      {/* Hero Section with Background Overlay and Title */}
     
      {/* Main Content */}
      
      <div className=" mx-auto px-4 py-12">
        {/* Introduction */}
        <CustomContainer>
        <section className="mb-16 space-y-5">
            
        <h2 className="font-bold  text-2xl sm:text-3xl leading-[2.25rem] text-[#171717]">
        Bridging Research and Farmers for Sustainable Agriculture 
          </h2>
          <p className="text-sm leading-relaxed">
            The Adopted Research Outreach Centers (AROCs) initiative, spearheaded by the Agricultural Research Council
            of Nigeria (ARCN), is a transformative model for disseminating improved agricultural technologies to
            smallholder farmers and schools. By fostering direct collaboration between researchers, extension agents,
            and farming communities, AROCs enhance food security, empower farmers, and inspire youth engagement in
            agriculture.
          </p>
          
        </section>
        </CustomContainer>

        {/* Concept and Historical Background */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Concept and Historical Background</h2>
          <h3 className="text-lg font-semibold mb-4">Origins and Evolution</h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-4">
              <div className="font-bold min-w-16">1996:</div>
              <div>
                Launched under the National Agricultural Research Project (NARP), funded by the World Bank, to address:
                <ul className="list-disc ml-6 mt-2">
                  <li>Inaccessibility of improved technologies for smallholder farmers.</li>
                  <li>Weak linkages between research, extension, and farmers.</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-bold min-w-16">2008:</div>
              <div>
                Revitalized by ARCN, mandating each National Agricultural Research Institute (NARI) and Federal College
                of Agriculture (FCA) to adopt 2 villages and 2 schools.
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-bold min-w-16">2012:</div>
              <div>
                Scaled nationally under the West Africa Agricultural Productivity Programme (WAAPP-Nigeria), achieving:
                <ul className="list-disc ml-6 mt-2">
                  <li>638% growth in adopted villages (52 to 384 by 2016).</li>
                  <li>277% growth in adopted schools (52 to 196 by 2016).</li>
                  <li>1,024,835 beneficiaries by 2016, including 627,844 farmers and 80,788 students.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </CustomContainer>

        <CustomContainer>
        {/* Core Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Core Objectives</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-sm">
              Promote large-scale adoption of improved technologies (e.g., disease-resistant crops, fish farming).
            </li>
            <li className="text-sm">Empower resource-poor farmers and create jobs for youths.</li>
            <li className="text-sm">Enhance food security through productivity gains.</li>
            <li className="text-sm">
              Inspire students to pursue agriculture via school farms and curriculum integration.
            </li>
          </ul>
        </section>
        </CustomContainer>

        {/* Implementation Framework */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Implementation Framework</h2>
          <h3 className="text-lg font-semibold mb-4">Selection of Villages and Schools</h3>
          <div className="mb-6 text-sm">
            <h4 className="font-bold mb-2">Criteria:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Proximity to research institutes (expanded from 20km to 50km radius).</li>
              <li>Active farmer groups (prioritizing women and youth).</li>
            </ul>
          </div>
          <div className=" text-sm">
            <h4 className="font-bold mb-2">Process:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                NARIs/FCAs identify communities and demonstrate economically viable, simple, and culturally compatible
                technologies.
              </li>
            </ul>
          </div>
        </section>
        </CustomContainer>

        {/* Distribution Map */}
       
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Distribution</h2>
          <div className="bg-white py-4 w-full">
            <NigeriaMap />
          </div>
        </section>

        {/* Key Stakeholders */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Stakeholders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Stakeholder</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Researchers</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Adapt technologies (e.g., fish pond systems, improved seeds).
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Extension Agents</td>
                  <td className="border border-gray-300 px-4 py-2">Train farmers and monitor adoption.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Farmers</td>
                  <td className="border border-gray-300 px-4 py-2">Participate in trials and adopt proven methods.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Schools</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Integrate modern techniques (e.g., poultry production, crop trials).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        </CustomContainer>

        {/* Key Activities and Interventions */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Activities and Interventions</h2>
          <Tabs defaultValue="technology">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 text-sm">
              <TabsItem value="technology" className="text-sm">Technology Dissemination</TabsItem>
              <TabsItem value="capacity">Capacity Building</TabsItem>
              <TabsItem value="infrastructure">Infrastructure Development</TabsItem>
            </TabsList>
            <TabsContent value="technology" className="p-4 border rounded-md mt-2 max-sm:mt-14 text-sm">
              <h3 className="text-lg font-semibold mb-4">Technology Dissemination</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Priority Commodities:</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Fish: Pond culture, plastic tanks (NIOMR, Lagos).</li>
                    <li>Maize: SAMMAZ 11 & 14 (IAR Zaria).</li>
                    <li>Rice: FARO 44, 52 (NCRI Badeggi).</li>
                    <li>Cassava: TME 419 (NIHORT, Ibadan).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Inputs Distributed:</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>27,450 male farmers and 17,550 female farmers received seeds/fingerlings (NCRI Badeggi).</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="capacity" className="p-4 border rounded-md mt-2 text-sm">
              <h3 className="text-lg font-semibold mb-4">Capacity Building</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Farmers:</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>38,360 trained (26,553 males, 11,807 females) in 1,395 hours.</li>
                    <li>Topics: Fish feed formulation, crop spacing, pest control.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Schools:</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>80,788 students engaged (50,773 males, 30,015 females).</li>
                    <li>Established Young Farmers&apos; Clubs and demo farms.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="infrastructure" className="p-4 border rounded-md mt-2 text-sm">
              <h3 className="text-lg font-semibold mb-4">Infrastructure Development</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Constructed fish ponds, poultry pens, and biogas plants.</li>
                <li>Provided smoking kilns (NSPRI Ilorin) and processing equipment.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>
        </CustomContainer>

        {/* Success Stories */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Success Stories from AROC Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-md font-semibold mb-3">National Cereals Research Institute (NCRI), Badeggi</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Technologies:</span> Upland rice (FARO 55), lowland rice (FARO 44),
                  rice-fish farming.
                </p>
                <p className="font-bold">Impact:</p>
                <ul className="list-disc ml-6">
                  <li>192,150 farm families benefited (27,450 males, 17,550 females).</li>
                  <li>4,340 male students and 2,660 female students trained.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-md font-semibold mb-3">National Veterinary Research Institute (NVRI), Vom</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Technologies:</span> Newcastle disease vaccines, broiler production.
                </p>
                <p className="font-bold">Impact:</p>
                <ul className="list-disc ml-6">
                  <li>1,687 farm families vaccinated poultry.</li>
                  <li>1,720 male students and 1,055 female students engaged.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-md font-semibold mb-3">Federal College of Agriculture, Ibadan</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Technologies:</span> Cassava-maize intercrop, fish farming.
                </p>
                <p className="font-bold">Impact:</p>
                <ul className="list-disc ml-6">
                  <li>17,388 farm families adopted improved practices.</li>
                  <li>899 male students and 736 female students trained.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-md font-semibold mb-3">Lake Chad Research Institute (LCRI), Maiduguri</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Technologies:</span> Drought-tolerant millet (SOSATC88), maize varieties.
                </p>
                <p className="font-bold">Impact:</p>
                <ul className="list-disc ml-6">
                  <li>882 farm families increased yields by 30%.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </CustomContainer>

        {/* Challenges and Mitigation Strategies */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Challenges and Mitigation Strategies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Challenge</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Late fund disbursement</td>
                  <td className="border border-gray-300 px-4 py-2">Advocate for pre-season budget approval</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Herder-farmer conflicts</td>
                  <td className="border border-gray-300 px-4 py-2">Community dialogue and fencing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Low youth participation</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Linkages with government financial institutions for loans
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Poor technology adoption</td>
                  <td className="border border-gray-300 px-4 py-2">Intensive hands-on training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        </CustomContainer>

        {/* Future Plans */}
        <CustomContainer>
        <section className="mb-16 ">
          <h2 className="text-3xl font-bold mb-6">Future Plans</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-sm">Scale-Up: Target all 774 LGAs in Nigeria.</li>
            <li className="text-sm">Sustainability: Partner with private sector for input financing.</li>
          </ul>
        </section>
        </CustomContainer>

        {/* Resources */}
        <CustomContainer>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <p className="text-sm">Contact us for resources on AROCs</p>
        </section>
        </CustomContainer>
      </div>
    </main>
  )
}
