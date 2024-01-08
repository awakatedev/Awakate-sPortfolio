/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { projects } from '../utils/projects';
import StyledTag from './StyledTag';

function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function openModal(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedProject(null);
  }

  function Skeleton() {
    return (
      <div
        role="status"
        className="h-72 max-w-sm rounded-lg bg-softGray p-2 md:h-80 md:p-6"
      >
        <div className="mb-4 flex h-48 animate-pulse items-center justify-center rounded bg-softDark">
          <svg
            className="h-12 w-12 text-softGray "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="mb-4 h-2.5 animate-pulse rounded-full  bg-softDark" />
        <div className="mb-2.5 h-2 animate-pulse rounded-full  bg-softDark" />
        <div className="mb-2.5 h-2 animate-pulse rounded-full  bg-softDark" />
      </div>
    );
  }

  function ProjectModal({ project }) {
    if (!project) return null;

    return (
      <div
        className={`fixed inset-0 flex items-center justify-center p-5 z-50 transition-opacity duration-500 ease-in-out transform ${
          isModalOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      >
        <div className="h-[95%] w-full max-w-2xl rounded-lg bg-softGray p-8">
          <div className="flex justify-between items-start gap-5">
            <h3 className="font-inter font-bold text-primary text-2xl ">
              {project.name}
            </h3>
            <button
              onClick={closeModal}
              className="float-right p-2 hover:bg-softDark rounded-lg"
            >
              <Icon
                className="text-3xl text-primary"
                icon="heroicons-outline:x"
              />
            </button>
          </div>
          <div className="w-full md:h-1/4 mt-8 md:mb-36 mb-0">
            <Image
              src={project.image}
              alt={project.name}
              width={1700}
              height={900}
            />
          </div>
          <section className="py-3">
            <div className="flex justify-between">
              <h4 className="my-2 font-inter font-bold text-primary lg:text-3xl sp:text-xl">
                Description:
              </h4>
              <a
                className="font-regular flex gap-3 rounded-lg p-3 font-inter text-textGray hover:bg-softDark lg:text-xl sp:text-lg"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link{' '}
                <Icon className="text-3xl text-primary" icon="zondicons:link" />
              </a>
            </div>
            <p className="font-inter font-bold text-textGray lg:text-xl sp:text-lg">
              {project.description}
            </p>
            <h4 className="my-2 font-inter font-bold text-primary lg:text-3xl sp:text-xl">
              My role:
            </h4>
            <p className="font-inter font-bold text-textGray lg:text-xl sp:text-lg">
              {project.role}
            </p>
            <h4 className="my-2 font-inter font-bold text-primary lg:text-3xl sp:text-xl">
              Stack:
            </h4>
            <ul className="my-3 grid grid-cols-4 gap-3 md:w-3/4 w-full">
              {project.stack.map((tech) => (
                <li
                  className="w-fit rounded-full bg-softDark py-3 px-4 font-inter font-bold text-primary"
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isModalOpen && <ProjectModal project={selectedProject} />}
      {isLoading ? (
        <div className="my-10 grid w-full grid-cols-card1 items-center justify-between gap-x-2 gap-y-[5vh] pt-5 md:grid-cols-cardDesktop2  md:gap-x-4 lg:grid-cols-cardDesktop3 xl:grid-cols-cardDesktop4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="my-10 grid w-full grid-cols-card1 items-center justify-between gap-x-2 gap-y-[5vh] pt-5 md:grid-cols-cardDesktop2  md:gap-x-4 lg:grid-cols-cardDesktop3 xl:grid-cols-cardDesktop4">
          {projects &&
            projects.map((project) => (
              <div
                key={project.id}
                className=" w-full cursor-pointer rounded-lg bg-softGray p-4 md:h-96 md:p-6"
                onClick={() => openModal(project)}
              >
                <div className="mb-4 flex h-48 items-center justify-center rounded bg-softDark">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={600}
                  />
                </div>
                <section className="w-full overflow-hidden">
                  <div className="flex justify-between">
                    <StyledTag
                      type="h5"
                      additionalStyle="text-base md:text-xl text-left font-bold text-primary mt-3 mb-3"
                    >
                      {project.name}
                    </StyledTag>
                    <a
                      className="font-regular flex gap-3 rounded-lg p-3 font-inter text-textGray hover:bg-softDark lg:text-xl sp:text-lg"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        className="text-3xl text-primary"
                        icon="zondicons:link"
                      />
                    </a>
                  </div>
                  <ul className="my-3 flex gap-3">
                    {project.stack.slice(0, 3).map((tech) => (
                      <li
                        className="rounded-full bg-softDark px-4 py-2 font-inter font-medium text-primary text-sm"
                        key={tech}
                      >
                        {tech}
                      </li>
                    ))}
                    {project.stack.length > 3 && (
                      <li className="rounded-full bg-softDark px-4 py-2 font-inter font-medium text-primary">
                        +{project.stack.length - 3}
                      </li>
                    )}
                  </ul>
                </section>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Card;
