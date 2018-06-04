import React, { Component } from 'react';
//import ApiService from '../../api/api.service';
import Sidebar from '../../components/Sidebar/Sidebar';
//import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                limit: 10,
                offset: 1,
                total: 0
            },
            orderBy: 'name',
            config: ''
        }
    }

    componentDidMount() {
        /* ApiService().getData('characters', `limit=${this.state.pagination.limit}&offset=${this.state.pagination.offset}`)
            .then(response => {
                if (response.status !== 200) throw new Error('Error');
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState((prevState) => ({
                    data: response.data.results,
                    config: response.attributionText,
                    pagination: {...prevState.pagination, total: response.data.total }
                }));
            })
            .catch(err => {
                console.log('error', err);
            }); */
    }

    render() {
        return (
            <div className="pos_relative">
                <Sidebar />
                <div className="container__cards">
                    <Card />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum possimus laborum accusantium labore id nostrum modi molestiae cum atque ad repellendus, et natus consectetur alias eius soluta debitis rem rerum?
                    Delectus deserunt hic, doloribus corrupti eius alias deleniti ducimus architecto aliquam officiis voluptatem, assumenda vel odio accusamus impedit quod nesciunt repudiandae ullam cupiditate in neque voluptas. Accusantium tenetur voluptatibus ea.
                    Ratione, modi corrupti dolor obcaecati odio iusto, aut voluptatum accusantium dolore quas totam repudiandae veritatis blanditiis quasi. Error, quibusdam repellendus libero vitae ab reiciendis voluptas veritatis perferendis culpa modi? Excepturi.
                    Facilis, eveniet culpa. Fuga, deserunt. Quidem similique sequi quisquam, dolore ea enim eum eos expedita voluptates vitae dolorum in placeat excepturi distinctio unde natus quibusdam facere eveniet sint quos quasi.
                    Voluptatibus provident illum quo numquam accusamus tempore minima doloribus quod maiores qui facere nesciunt magnam dolor consequatur eligendi perferendis, quis quidem necessitatibus sapiente eaque excepturi? Sequi culpa tempora blanditiis quasi.
                    Voluptatem harum tempore beatae provident. Ipsa totam quibusdam voluptatibus dolore consequatur, corrupti, ratione, pariatur quis odit veritatis repudiandae deserunt voluptatum architecto. Unde repudiandae molestiae placeat necessitatibus soluta, quas fugit ab.
                    Saepe quibusdam nulla aliquam, dicta et eius ducimus sequi nihil, aut fuga velit doloremque dolore nostrum culpa! Qui commodi culpa numquam accusantium in, quis minima quo, fuga ab odio ratione.
                    Odio voluptatum id, eaque placeat molestias officiis ipsa aperiam adipisci rerum quas dolor velit aspernatur, amet dolorum cumque in minima tempore dolores perferendis ducimus similique. Laboriosam perspiciatis quos sapiente pariatur.
                    Voluptates, aliquid quisquam facilis perspiciatis vero eaque similique adipisci blanditiis quibusdam voluptatem aspernatur ad facere officia exercitationem eligendi eius unde dolor delectus! Esse aut maiores debitis soluta neque quisquam officia.
                    Unde dolor autem laborum, sequi, ullam eveniet cum odio consequuntur facere, facilis error excepturi. Fugiat, rem sint. Quam voluptatibus, ex ullam, ut possimus ipsum dolor, pariatur accusamus ad omnis animi.
                    Repellat tenetur labore, culpa a odit veritatis ipsum nisi eum at, perspiciatis unde natus vel rerum laboriosam nostrum architecto? A molestias sapiente dicta similique architecto perspiciatis rerum, repudiandae aliquam rem?
                    Vel iusto, quos dolorem delectus accusamus similique magnam totam, magni dolore ratione, error molestias debitis. Exercitationem, architecto modi. Illo quos corporis, et dolores sed iure. Tempora labore beatae maxime reiciendis.
                    Consectetur quas dolor quam officia voluptatem libero rem consequuntur facere repellat, quis saepe ratione. Quaerat soluta hic tenetur placeat aut veritatis similique cumque, facere autem, velit accusantium provident aspernatur quia.
                    Dolorem, numquam earum. Voluptatem iure quae, perspiciatis corporis quaerat id animi totam reiciendis quo nisi excepturi assumenda architecto quibusdam velit explicabo iusto? Sit quibusdam sapiente tempora iste neque consequuntur possimus!
                    Voluptates soluta veritatis quo amet, ratione tenetur aspernatur aut hic quisquam facere repudiandae nam asperiores numquam beatae, laboriosam dolore vero, mollitia eveniet quod nisi. Qui accusamus sapiente similique facere itaque?
                    Sunt iusto corporis possimus iure alias cumque impedit hic labore officiis fugiat vitae accusamus iste veniam temporibus nostrum necessitatibus aliquam quia animi beatae, praesentium quis voluptate accusantium excepturi maiores. Tenetur.
                    Voluptatibus rem ab, ipsum qui voluptas, omnis, accusamus sequi sunt nemo earum voluptate odit. Ut facilis fugiat, tenetur vel quasi ipsam ab soluta veritatis? Repellendus nihil ducimus dicta autem non.
                    Asperiores quia consequatur nam veniam eius numquam eveniet quasi, consequuntur laudantium aliquid eum facere quos voluptates, esse laborum beatae? Quod libero, dolore magnam quas recusandae mollitia beatae harum culpa nihil.
                    Praesentium in, aliquid omnis fugit repellendus itaque quam beatae velit! Qui labore id natus facere fuga animi tenetur quae porro alias error ducimus a sunt, voluptas, repellat excepturi fugit provident?
                    Nostrum sunt minima ex nesciunt earum. Explicabo porro architecto molestias officiis minus nesciunt quae aliquam consectetur nulla ullam enim ea deserunt beatae voluptatem delectus, necessitatibus accusamus mollitia atque ut perferendis!
                    Eos quasi blanditiis harum voluptatem hic modi inventore aliquam et sapiente, nulla ab a accusantium id architecto dolorum magnam cupiditate maxime! Autem deleniti dolores mollitia non fugiat perspiciatis voluptatibus illum.
                    Excepturi ducimus dolorem a consectetur, tempora sapiente hic quidem incidunt voluptas animi corrupti aliquam veritatis possimus omnis impedit. Minima dolores temporibus, minus deserunt harum enim tenetur perferendis possimus saepe qui?
                    Dolorem enim totam nihil error, quo eos voluptas beatae nam fuga sed hic eveniet eaque omnis placeat saepe reiciendis nulla aliquid amet. Maiores ex accusamus id repellat, sapiente reiciendis repellendus.
                    Cupiditate, dolor et dolorem aspernatur unde odit expedita? Ipsam consectetur possimus fugit velit deleniti eum harum, eos facere magnam itaque deserunt voluptate quia excepturi ipsa hic id eaque officiis porro.
                    Ipsum voluptatem at a dolorum libero deserunt quidem vitae laborum quis saepe exercitationem sit, rerum eos alias, quibusdam cumque quam tempora voluptate reprehenderit nulla necessitatibus impedit non. Minus, obcaecati odit.
                    Atque debitis sapiente dolorum sequi adipisci, voluptatem quae iure non laudantium incidunt nulla voluptate molestiae labore cumque optio libero? Deserunt ex obcaecati illum dolores eum libero sequi accusantium veritatis voluptate.
                    Unde laboriosam quos maxime ea, qui nostrum placeat quam omnis consequatur voluptatum. Nostrum possimus laudantium quaerat hic neque quam debitis sit nemo dignissimos ipsam sint quia, molestiae dicta, minima vel!
                    Dolor similique debitis corrupti vitae mollitia nulla veritatis dignissimos quae et facere aliquid magni reiciendis inventore, tempore laboriosam eos aliquam nobis amet eligendi numquam hic. Distinctio deleniti nesciunt quisquam quos?
                    Facilis magnam mollitia molestias totam, quos laudantium cupiditate fugiat recusandae aspernatur temporibus voluptatum expedita tempora omnis ratione voluptates excepturi, fuga quia, vitae tempore nostrum libero eos dolor consequatur. Amet, aliquid.
                    Provident laborum quo, non maiores nesciunt quos dignissimos recusandae, eos ex tenetur eius, odio numquam obcaecati pariatur exercitationem! Autem obcaecati pariatur, harum aliquam neque quas est facere eum esse aspernatur.
                    Odio accusantium placeat ipsa, eius illo error, dolorum, sapiente praesentium reprehenderit harum repellendus. Id repudiandae voluptatem animi earum officia suscipit sed? Voluptates, totam modi. Doloremque dignissimos sunt corporis magni modi!
                    Accusamus nisi eius sunt minima quasi est error asperiores magnam, vel distinctio voluptatum quos quo nesciunt necessitatibus dolore. Magni quod aut facere officia amet suscipit vitae voluptatum velit incidunt inventore!
                    Minima rerum quia alias eius ducimus nostrum modi mollitia? A, tempore, quis eius quod qui cupiditate deleniti laborum dolorem atque numquam pariatur corporis ex eum iusto veniam? Itaque, recusandae soluta.
                    Illo veniam error et quae maxime nisi facere corrupti? Quisquam eveniet soluta sequi rerum eum sit distinctio, reprehenderit aperiam dolore accusamus, unde eligendi facilis dicta minima, ipsa corporis eos perspiciatis.
                    Accusamus numquam earum a hic quia non, dolore harum aliquam velit incidunt dolorum placeat provident officiis illo vitae, totam nobis accusantium. Eligendi illo unde, dignissimos ad ea itaque ex quod?
                    Perspiciatis totam illum ab corrupti, magni impedit quis sequi fuga explicabo dolore rerum facilis ducimus? Commodi ut animi ab aliquid a, facilis voluptatem placeat doloribus atque cumque, reprehenderit esse eius!
                    Expedita sapiente accusamus, quae temporibus est blanditiis quam aspernatur ratione, exercitationem facilis odit omnis aliquam? Debitis, ad suscipit eum laboriosam inventore dignissimos culpa voluptate minus architecto quis. Iure, provident aperiam!
                    Eligendi minima amet reprehenderit ullam? Inventore reprehenderit voluptatibus ducimus explicabo earum sint corrupti sapiente illum laudantium dolorem fugit cupiditate exercitationem a rem nostrum, odit consectetur, consequatur sunt praesentium itaque fugiat.
                    Ratione esse quisquam minima at odit soluta repellat ullam, tenetur labore nisi, quam qui nostrum, autem nihil animi mollitia aspernatur? Est fuga dolores voluptatibus. Quis corporis eius delectus esse ab?
                    Soluta, possimus maxime reprehenderit illum aspernatur repellendus unde illo nulla! Reprehenderit distinctio officia explicabo nulla? Incidunt magnam, nesciunt perferendis adipisci maxime cupiditate nostrum maiores error laudantium consectetur explicabo impedit eum?
                    Nam sapiente, illo at soluta sed iusto impedit natus aliquam possimus libero nemo reiciendis, voluptates voluptatum, similique alias non nulla est animi repudiandae fuga provident! Nisi dolorem harum minus blanditiis!
                    Totam voluptatem repellat illo, laborum et consequuntur quibusdam delectus consequatur veritatis corrupti corporis alias rem commodi quia earum voluptas est adipisci a quae cum officia pariatur laudantium, molestiae illum. Dolores!
                    Vitae, minus, voluptatum nobis dolore quam iure quaerat numquam praesentium quasi repellat sint explicabo amet deserunt saepe omnis labore veniam assumenda ipsum similique nam, excepturi ullam. Ipsa iusto voluptas numquam.
                    Soluta enim veritatis aut laborum dolore suscipit officia magni nam vitae dolorum quae illo ut corrupti, repellendus dolor, facilis, possimus sit exercitationem rerum laudantium? Sit ex et aut asperiores iure?
                    Doloremque enim eveniet recusandae maxime, expedita, aspernatur eaque dicta, rem blanditiis vitae possimus minima. Atque nihil, cupiditate non in quam ratione dolore assumenda amet nesciunt, ipsum, suscipit voluptatem quibusdam dicta.
                    Minima exercitationem, veritatis totam non, ducimus, odit corporis ipsa dolore vitae adipisci ea fuga fugiat eum unde quae voluptatibus ratione nulla dolorem esse. Incidunt voluptate eveniet quos alias, vero officia.
                    Dolores laudantium fuga consequatur tempore iusto aut eos nemo. Quaerat quae dolor quisquam amet atque molestiae eum rem quam, sed illum ut debitis. Et unde, sint accusamus amet voluptatem commodi!
                    Exercitationem minima consequatur sed tempore, fuga enim ex facilis itaque dolorum et commodi. Ullam vitae eum quasi nesciunt fugiat velit aperiam, porro commodi excepturi atque ipsum dolores expedita nisi facilis.
                    Fugiat, dignissimos eos porro veniam quidem nisi eius sapiente est! Obcaecati, perferendis debitis libero, illum nesciunt vitae voluptate veniam aspernatur maxime quo saepe natus, quidem voluptatum itaque officia cupiditate iusto.
                    Aut in voluptas libero eligendi, delectus, nobis sed error nam repudiandae magnam dolorem nisi? Dolore, repellendus temporibus mollitia exercitationem sunt nam tenetur error voluptatibus ipsa cumque sed inventore impedit porro.
                </div>
                {/* <CharacterInfo /> */}
                <Pagination />
            </div>
        );
    }
}

export default Characters;