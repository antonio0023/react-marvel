import React, { Component } from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';

import Routes from '../../Routes';
import PageError from '../../pages/Error/Error';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <nav className="navbar">
                        <NavLink to="/">
                            <img className="navbar__img" src="marvel.png" alt="Marvel Logo" />
                        </NavLink>
                        <div>
                            <NavLink className="navbar__item" activeClassName="navbar__item--active" to="/comics">Comics</NavLink>
                            <NavLink className="navbar__item" activeClassName="navbar__item--active" to="/series">Series</NavLink>
                        </div>
                    </nav>

                    <div className="main-container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus possimus officiis ad incidunt eos dolorem aspernatur odit, aut, illo alias rerum perferendis iste aliquid, vero dolor voluptatibus vitae itaque.
                        Similique deleniti exercitationem possimus suscipit eaque voluptates at, officiis odio rerum dolore. Recusandae, delectus quaerat optio ullam dignissimos quis facilis quam, harum veritatis voluptatibus, rem at laborum explicabo nulla error?
                        Tempora reiciendis dicta nam ipsum unde beatae autem, at quis est impedit odio harum quam tenetur corporis rerum fuga iure. Iste quasi odit illo asperiores laboriosam porro totam aspernatur consequuntur.
                        Expedita rem, culpa labore iusto vel deleniti qui nesciunt repudiandae quo commodi architecto esse libero aut incidunt sint, magni soluta quaerat. Enim voluptatem reiciendis aut alias ab optio natus repellat.
                        Laudantium, corrupti placeat? Illum ut saepe earum quasi tenetur aliquid labore ipsa molestiae culpa ratione blanditiis, dolorem dolore, quae, aspernatur repellendus suscipit laboriosam libero corporis veritatis inventore mollitia id quod.
                        Quaerat quas illo voluptates, a eveniet aliquid ea, quis quos harum aspernatur saepe sunt? Provident quam officiis at dolorem aut corrupti natus ratione in eaque laborum, fuga voluptates nihil placeat.
                        Sunt, ullam corporis quibusdam velit vero vel neque nulla reprehenderit iste repellendus eligendi, nostrum officia totam esse expedita. Reiciendis eveniet provident eum neque quos error consectetur tempora perferendis sequi nobis.
                        Magnam ipsam eligendi soluta veniam a doloremque voluptatibus repellat. Sed, nisi? Necessitatibus debitis vel dignissimos doloribus dolore laborum praesentium a ea, quis distinctio veritatis quas aut, perspiciatis, tenetur molestias cupiditate!
                        Eius et voluptate explicabo! Commodi laboriosam maiores est odit sed et impedit ullam laudantium cupiditate dignissimos delectus, rem nemo, nesciunt accusantium aliquam harum temporibus laborum deleniti quisquam? Tenetur, deleniti totam?
                        Reprehenderit omnis nobis debitis quisquam ullam nisi cumque. Velit libero ut harum? Quisquam, pariatur ea voluptate nulla possimus rem sunt. Sed minus sit at repudiandae cum accusamus quis rem nesciunt!
                        Delectus suscipit quaerat eius eos, a tempora qui labore dolorem voluptatum maxime, quisquam optio accusamus ex debitis. Repellat explicabo culpa debitis fugit nemo numquam. Ex asperiores nisi accusamus nobis facere?
                        Vel voluptatem placeat facilis dolore qui magnam alias dolor, esse debitis ipsam doloremque odit itaque, sapiente eveniet maiores et voluptate, deleniti facere exercitationem. Officia aperiam minima possimus itaque labore voluptatibus.
                        Iusto itaque voluptas nemo vero, consequuntur, non numquam adipisci magnam ipsum natus, eius quidem? Quibusdam, repudiandae accusamus velit in at veniam fuga rerum excepturi laudantium cum doloribus delectus sapiente vitae!
                        Aut magnam voluptas commodi sit temporibus fuga. Tempora eum pariatur aliquid magni repudiandae qui aspernatur? Impedit corrupti recusandae neque quisquam deserunt at ut odio nemo harum, accusantium pariatur eaque cum.
                        Cupiditate cum eos hic quos molestiae perferendis magnam illo accusantium. Saepe, provident quis ea ab laboriosam magni repudiandae illum recusandae ad tempore ex tempora culpa nesciunt, vel placeat nam ratione.
                        Praesentium et debitis amet ea? Perspiciatis voluptates reiciendis dolor fuga quas molestias quae mollitia esse, ipsam voluptatum aperiam eligendi iusto veniam dolores? Sit sint impedit tenetur voluptate aut autem officia.
                        Praesentium, aliquid excepturi blanditiis eligendi quo reiciendis reprehenderit dignissimos quisquam labore ducimus beatae ad laudantium delectus quaerat vero harum nobis? Fugiat totam at quisquam. Est similique mollitia recusandae possimus soluta?
                        Dolorum aut eum quidem deleniti, itaque necessitatibus? Quas non cum pariatur quidem officiis fugiat architecto. Fuga labore voluptate vero consectetur, officia expedita iusto architecto itaque? Laudantium nostrum porro dolor quaerat.
                        Quam, cumque magnam! Sed ut perferendis temporibus cumque quia error magni repellendus impedit at ipsam delectus dolores asperiores est, recusandae odio mollitia veniam commodi, eum quo, cupiditate iure quisquam neque.
                        Similique voluptatibus, ab asperiores cumque aliquid sequi repellendus quibusdam molestias. Eius voluptates, sit reprehenderit laborum pariatur neque error temporibus voluptatibus praesentium, dolores eum omnis. Voluptatem quisquam ducimus aperiam eos exercitationem.
                        Repellendus, optio amet quisquam recusandae nam voluptatibus earum ducimus nemo vitae est quis sapiente mollitia. Animi, velit quasi. Nihil dolores deleniti nisi corrupti qui hic, suscipit voluptate dicta dignissimos quia!
                        Accusantium sunt deserunt non animi omnis labore, sequi fugiat quia beatae incidunt molestiae ducimus officia, iste qui quasi maxime culpa quam architecto nesciunt magnam natus repudiandae? Sapiente qui error voluptates.
                        Consequuntur quibusdam corrupti illo enim, dicta vitae facilis, exercitationem voluptatem eveniet officiis officia autem laudantium ducimus dignissimos veritatis, iusto tenetur voluptate unde eius iste accusantium sunt labore animi eum? Repellendus.
                        Dicta dignissimos maxime suscipit quas repellat impedit corrupti non minima deleniti, quia quod fuga repellendus vero est dolore nam nemo assumenda? Deleniti vero dolores quas quos cupiditate beatae eius fugiat!
                        Veniam magni numquam doloribus corrupti iure officiis natus obcaecati quaerat velit vel. Sed ullam adipisci ipsa quos error fugit voluptatum ipsam, provident enim nisi nihil praesentium deleniti dolorem minima eveniet?
                        Accusamus, molestiae. Sequi voluptates numquam cupiditate molestiae architecto, nisi blanditiis hic quod officia voluptatem voluptas totam nulla vitae doloribus laborum pariatur aspernatur reiciendis dolor amet. Maxime suscipit hic repellendus quisquam!
                        Voluptatibus aut dolore debitis consectetur illum temporibus porro. Sed aut distinctio, nemo accusamus voluptatem voluptas at, a asperiores officia qui maiores, tempora illum facilis illo reprehenderit eveniet deserunt necessitatibus? Unde.
                        Fuga expedita natus error tempore iusto a ut laborum quisquam modi repellat. Tenetur voluptas beatae modi reprehenderit asperiores molestiae magni delectus qui doloremque, repellendus eius accusamus voluptates odit officiis nihil.
                        Earum quis debitis laudantium ducimus tenetur voluptatum eveniet molestias, explicabo delectus aspernatur quidem commodi eius quia, corporis, vero unde sequi deleniti neque odio molestiae? Quas quo nam eveniet ex repellendus.
                        Quod repudiandae atque voluptatibus officiis placeat harum deserunt eius neque, quos nam quae quidem, odit, facere odio! Omnis doloremque ipsum atque eveniet quisquam sunt consequatur. Voluptas delectus quas exercitationem harum.
                        Excepturi libero assumenda rerum nam. Autem impedit repellat veritatis adipisci, vel explicabo quo aliquam accusantium, ex sit laboriosam vero sapiente cumque obcaecati enim. Error dicta aliquam rem quidem reprehenderit quae.
                        Dolor possimus suscipit necessitatibus quas quibusdam, id placeat ex reiciendis quam veritatis repudiandae delectus tempore ipsa itaque perspiciatis animi totam, ea nostrum quia aliquam aliquid sequi natus. A, quaerat culpa?
                        Aperiam quidem debitis eius tenetur facere ratione explicabo iusto sapiente doloremque! Soluta magni, error natus perspiciatis dicta esse culpa pariatur! Optio impedit doloribus omnis rem aspernatur. Repellat dignissimos commodi laboriosam.
                        Deleniti ullam consectetur sint iste aut laboriosam possimus esse quasi labore dicta, accusamus quaerat rem expedita odio! Blanditiis amet aliquid veritatis. Reprehenderit ullam corrupti ab omnis molestias laboriosam voluptas incidunt!
                        Quos magni similique esse vel nihil voluptatibus doloribus deleniti qui fuga hic, molestiae illum eos quam eligendi. Modi cupiditate aliquam atque expedita excepturi aut sequi quas numquam quod! Deserunt, quas.
                        Veritatis inventore architecto maiores eaque tenetur voluptatum molestias beatae maxime laudantium officia. Neque nihil accusantium ipsum? Numquam autem a deserunt tempora ratione? Sunt officia commodi labore quasi voluptates assumenda tenetur?
                        Voluptates, sit similique architecto laborum ipsum atque repellat, quas dolores, facere dignissimos assumenda. Nobis, amet? Aliquid sunt quam alias delectus nihil sapiente eos, fuga odit ab repudiandae! Dolorum, totam! Officia?
                        Tenetur, nisi perferendis natus corrupti molestias, libero non facilis dolorum delectus saepe, dolor repellat possimus vitae vero? Impedit ipsum aspernatur quia quam, nam perferendis itaque, magni voluptate amet, tempora quaerat!
                        Reprehenderit, quam porro, quo eius corporis quas nobis tenetur perferendis natus voluptas nostrum, perspiciatis nisi obcaecati cumque atque amet fugit tempora necessitatibus dolor possimus soluta sequi reiciendis fugiat rem. Ipsam.
                        Nemo esse similique facilis voluptas dolore possimus nesciunt nihil tempore sunt perferendis perspiciatis obcaecati doloremque a enim dicta magni dignissimos, in, officia error molestias? Repudiandae ut molestiae laudantium tempora iusto!
                        {Routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                        ))}
                        <Route component={PageError} />
                    </div>
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default Navbar;