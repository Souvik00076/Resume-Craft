import React, { FC, Key, useState } from "react";
import {
  TCourse,
  TExperience,
  TProject,
  TResumeState,
  TTechnicalSkill,
} from "../../@types";
import { generateEmptyResumeState } from "../../utils";
import { useForm, useFieldArray } from "react-hook-form";
import { IconAdd, IconClose } from "../../assets";
export const EditResume: FC = () => {
  const resumeState = generateEmptyResumeState();
  const { register, control, handleSubmit } = useForm<TResumeState>({
    defaultValues: resumeState,
  });
  const {
    fields: interestFields,
    append: interestAppend,
    remove: interestRemove,
  } = useFieldArray({
    name: "personal.interest",
    control,
  });
  const onSubmit = (data: TResumeState) => {
    console.log(data);
  };
  const {
    fields: technicalFields,
    append: technicalAppend,
    remove: technicalRemove,
  } = useFieldArray({
    name: "personal.technicalskill",
    control,
  });
  const {
    fields: expFields,
    append: expAppend,
    remove: expRemove,
  } = useFieldArray({
    name: "experience",
    control,
  });

  const {
    fields: projectFields,
    append: projectAppend,
    remove: projectRemove,
  } = useFieldArray({
    name: "projects",
    control,
  });
  const {
    fields: courseFields,
    append: courseAppend,
    remove: courseRemove,
  } = useFieldArray({
    name: "course",
    control,
  });
  const [showHint, setShowHint] = useState<boolean>(false);
  return (
    <div className="container mx-auto">
      <div className="edit-resume-header">Enter your details</div>
      <div className=" border border-primary-light border-dotted px-2 my-8 pb-6 flex items-center justify-center  w-full">
        <form className="w-[50%]" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="_h1">Personal Details</h1>
          <div className="edit-resume-item">
            <input
              placeholder="Name"
              {...register(`personal.name` as const, {
                required: true,
              })}
            />
            <input
              placeholder="Last Name"
              {...register(`personal.lastName` as const)}
            />
          </div>
          <div className="edit-resume-item">
            <input
              {...register(`personal.mob` as const)}
              type="number"
              inputMode="tel"
              placeholder="Mobile No- +91"
            />
          </div>
          <div className="edit-resume-item">
            <input
              type="email"
              {...register(`personal.email` as const, { required: true })}
              inputMode="email"
              placeholder="Email"
            />
          </div>
          <div className="edit-resume-item">
            <input
              placeholder="City"
              {...register(`personal.email` as const)}
            />
            <input
              placeholder="Country"
              {...register(`personal.country` as const)}
            />
          </div>
          <div className="edit-resume-item">
            <input
              placeholder="Professional Title e.g Full Stack Developer"
              {...register(`personal.title` as const, { required: true })}
            />
            <input
              placeholder="Describe yourself in one or two lines"
              {...register(`personal.summary` as const)}
            />
          </div>
          <div className="edit-resume-item">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between gap-2 items-center">
                <input
                  className="input-primary w-full"
                  type="url"
                  {...register(`personal.profilePhoto` as const)}
                  placeholder="Paste your image url"
                />
                <div
                  className="text-xl cursor-pointer font-extrabold text-primary-light "
                  onMouseEnter={() => setShowHint(true)}
                  onMouseLeave={() => setShowHint(false)}
                >
                  i
                </div>
              </div>
              {showHint && (
                <div className="w-full bg-primary-light rounded-md py-1 px-4 text-white-smoke">
                  You can copy and paste your GitHub/LinkedIn profile image URL
                  here.
                  <br />
                  By right-clicking and copying image address
                </div>
              )}
            </div>
          </div>
          <h1 className="_h1">Interest/Skills</h1>
          <div className="input-field-array-dynamic mt-[10px]">
            {interestFields.map(
              (
                item: { hobbie: string; id: Key | null | undefined },
                index: number,
              ) => {
                return (
                  <div key={item.id}>
                    <input
                      defaultValue={item.hobbie}
                      placeholder="Interest/Hobbies e.g Chess"
                      {...register(
                        `personal.interest.${index}.hobbie` as const,
                        {
                          required: true,
                        },
                      )}
                    />
                    {interestFields.length > 1 && (
                      <div className="absolute  hover:cursor-pointer  rounded-full right-0 top-0 translate-x-[47%] translate-y-[-47%] bg-white">
                        <img
                          src={IconClose}
                          width={24}
                          height={24}
                          alt="closeicon"
                          onClick={() => interestRemove(index)}
                        />
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>
          <div className="flex items-center gap-2 my-4 ">
            <img
              src={IconAdd}
              width={32}
              height={32}
              alt="addicon"
              className="hover:cursor-pointer"
              onClick={() => interestAppend({ hobbie: "" })}
            />
            <div className="flex-1 border-2 border-dashed border-primary-light"></div>
          </div>
          <h1 className="_h1">Technical Skills</h1>
          <div className="mt-[10px]">
            {technicalFields.map(
              (
                item: TTechnicalSkill & { id: Key | null | undefined },
                index,
              ) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex flex-row items-center justify-between gap-2 mt-[10px]">
                      <input
                        className="input-primary w-full px-2 "
                        defaultValue={item.skill}
                        placeholder="Technical Skills e.g Javascript"
                        {...register(
                          `personal.technicalskill.${index}.skill` as const,
                          {
                            required: true,
                          },
                        )}
                      />
                      <input
                        className="input-primary w-full px-2"
                        type="number"
                        inputMode="decimal"
                        min="0"
                        max="10"
                        defaultValue={item.rate}
                        placeholder="Rate your skill out of 10"
                      />
                    </div>
                    {technicalFields.length > 1 ? (
                      <div className="flex justify-end mt-2">
                        <span
                          className="text-primary-light hover:cursor-pointer"
                          onClick={() => technicalRemove(index)}
                        >
                          Remove
                        </span>
                      </div>
                    ) : null}
                  </React.Fragment>
                );
              },
            )}
            <div className="flex items-center gap-2 my-4 ">
              <img
                src={IconAdd}
                width={32}
                height={32}
                alt="addicon"
                className="hover:cursor-pointer"
                onClick={() => technicalAppend({ skill: "", rate: "" })}
              />
              <div className="flex-1 border-2 border-dashed border-primary-light"></div>
            </div>
          </div>
          <h1 className="_h1"> Work Experience (if any ?) </h1>
          <div className="mt-[10px]">
            {expFields.map(
              (item: TExperience & { id: Key | null | undefined }, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <span> {index + 1}.</span>
                    <div className="flex items-center jusitfy-between gap-2">
                      <input
                        className="w-full input-primary px-2"
                        defaultValue={item.worktitle}
                        placeholder="Title/Position"
                      />
                      <input
                        className="w-full input-primary px-2"
                        defaultValue={item.company}
                        placeholder="Workplace/Company"
                      />
                    </div>
                    <input
                      className="input-primary px-2 w-full mt-[10px]"
                      defaultValue={item.description}
                      placeholder="Description about your work in one or two lines"
                    />
                    <input
                      className="input-primary px-2 w-full mt-[10px]"
                      defaultValue={item.tags}
                      placeholder="Link, Tags, Tech-stack or anything"
                    />
                    <div className="flex items-center justify-center mt-[10px]">
                      <input
                        className="input-primary-bottom tex-center"
                        name="year"
                        inputMode="numeric"
                        defaultValue={item.yearfrom}
                        placeholder="mm/yy"
                      />
                      {![1, 2].includes(index) ? (
                        <>
                          <>-</>
                          <input
                            name="year"
                            inputMode="numeric"
                            defaultValue={item.yearto}
                            placeholder="mm/yy"
                          />
                        </>
                      ) : null}
                      <input type="checkbox" />
                      <span className="input-span">Present?</span>
                    </div>
                    {index !== 0 ? (
                      <div className="input-remove">
                        <div>
                          <div>Remove</div>
                        </div>
                      </div>
                    ) : null}
                  </React.Fragment>
                );
              },
            )}
            <div className="add-input-block">
              <div></div>
            </div>
          </div>
          <div className="_h1">Personal Projects</div>
          <div className="mt-[10px]">
            {projectFields.map(
              (item: TProject & { id: Key | null | undefined }, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <span className="text-primary-light">{index + 1}</span>
                    <input
                      className="input-primary px-2 mt-[10px] w-full"
                      defaultValue={item.name}
                      placeholder="Project Title"
                    />
                    <input
                      className="input-primary px-2 mt-[10px] w-full"
                      defaultValue={item.tech}
                      placeholder="Tech Used e.g Html, Python (Use comma and space)"
                    />
                    <input
                      className="input-primary px-2 mt-[10px] w-full"
                      defaultValue={item.des}
                      placeholder="Project Description (Optional)"
                    />
                    <input
                      type="url"
                      className="input-primary px-2 mt-[10px] w-full"
                      defaultValue={item.link}
                      placeholder="Link (Optional)"
                    />
                    {projectFields.length > 1 ? (
                      <div className="w-full flex justify-end mt-2 ">
                        <span
                          className="text-primary-light hover:cursor-pointer"
                          onClick={() => projectRemove(index)}
                        >
                          Remove
                        </span>
                      </div>
                    ) : null}
                  </React.Fragment>
                );
              },
            )}
            <div className="flex items-center gap-2 my-4 ">
              <img
                src={IconAdd}
                width={32}
                height={32}
                alt="addicon"
                className="hover:cursor-pointer"
                onClick={() =>
                  projectAppend({ tech: "", link: "", des: "", name: "" })
                }
              />
              <div className="flex-1 border-2 border-dashed border-primary-light"></div>
            </div>
          </div>
          <div className="_h1">Courses/Trainings & Certificates</div>
          <div className="mt-[10px]">
            {courseFields.map(
              (item: TCourse & { id: Key | null | undefined }, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <span className="text-primary-light">{index + 1}.</span>
                    <div className="flex jusitfy-between items-center gap-2">
                      <input
                        className="input-primary w-full px-2 mt-[10px]"
                        defaultValue={item.name}
                        placeholder="Course/Certificate Name"
                      />
                      <input
                        className="input-primary px-2 w-full mt-[10px]"
                        defaultValue={item.provider}
                        placeholder="Course Provider Name"
                      />
                    </div>
                    {courseFields.length > 1 ? (
                      <div className="flex justify-end mt-2">
                        <span
                          className="text-primary-light hover:cursor-pointer"
                          onClick={() => courseRemove(index)}
                        >
                          Remove
                        </span>
                      </div>
                    ) : null}
                  </React.Fragment>
                );
              },
            )}
            <div className="flex items-center gap-2 my-4 ">
              <img
                src={IconAdd}
                width={32}
                height={32}
                alt="addicon"
                className="hover:cursor-pointer"
                onClick={() => courseAppend({ name: "", provider: "" })}
              />
              <div className="flex-1 border-2 border-dashed border-primary-light"></div>
            </div>
          </div>

          {/**/}
          {/*   Education Fields  */}
          {/*  <div className="input-head">Education</div> */}
          {/*  {[].map((item: any, index) => { */}
          {/*    return ( */}
          {/*      <React.Fragment key={item.id}> */}
          {/*        <div className="input-index">{index + 1}.</div> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          placeholder="College/Degree/Diploma Name" */}
          {/*        /> */}
          {/*        <div className="edu-grade"> */}
          {/*          <div> */}
          {/*            <input name="gradetype" value="percentage" type="radio" /> */}
          {/*            <span className="input-span">Percentage?</span> */}
          {/*          </div> */}
          {/*          <div>/</div> */}
          {/*          <div> */}
          {/*            <input name="gradetype" value="grade" type="radio" /> */}
          {/*            <span className="input-span">Grade?</span> */}
          {/*          </div> */}
          {/*        </div> */}
          {/*        <div className="grade-input"> */}
          {/*          <input */}
          {/*            type="number" */}
          {/*            inputMode="decimal" */}
          {/*            step="any" */}
          {/*            min="0" */}
          {/*            max="100" */}
          {/*            placeholder="Grade/Percentage" */}
          {/*          /> */}
          {/*        </div> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          placeholder="Institute/University Name" */}
          {/*        /> */}
          {/*        <div className="year"> */}
          {/*          <input */}
          {/*            name="year" */}
          {/*            inputMode="decimal" */}
          {/*            placeholder="yyyy e.g 2010" */}
          {/*          /> */}
          {/*          - */}
          {/*          <input */}
          {/*            name="year" */}
          {/*            inputMode="numeric" */}
          {/*            placeholder="yyyy e.g 2014" */}
          {/*          /> */}
          {/*        </div> */}
          {/*        {index !== 0 ? ( */}
          {/*          <div className="input-remove"> */}
          {/*            <div> */}
          {/*              <div>Remove</div> */}
          {/*            </div> */}
          {/*          </div> */}
          {/*        ) : null} */}
          {/*      </React.Fragment> */}
          {/*    ); */}
          {/*  })} */}
          {/*  <div className="add-input-block"> */}
          {/*    <div></div> */}
          {/*  </div> */}
          {/**/}
          <h1 className="_h1">Social/Links</h1>
          <div className="flex flex-col mt-[10px] gap-[10px]">
            <div className="flex items-center justify-between gap-2 ">
              <input
                className="input-primary px-2 w-full "
                placeholder="LinkedIn Url"
              />
              <input
                className="input-primary px-2 w-full "
                placeholder="GitHub Url"
              />
            </div>
            <input
              className="w-full input-primary px-2"
              placeholder="Portfolio Url or any other (Optional)"
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 border-primary-light rounded-md py-2 mt-[20px] font-semibold hover:bg-primary-light hover:text-white transition-all duration-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
