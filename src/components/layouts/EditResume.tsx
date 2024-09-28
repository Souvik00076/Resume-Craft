import React, { FC, useState } from "react";
import { TResumeState } from "../../@types";
import { generateEmptyResumeState } from "../../utils";

export const EditResume: FC = () => {
  const [resumeState, setResumeState] = useState<TResumeState>(
    generateEmptyResumeState(),
  );

  const [showHint, setShowHint] = useState<boolean>(false);
  return (
    <div className="container mx-auto">
      <div className="edit-resume-header">Enter your details</div>
      <div className=" border border-primary-light px-2 mt-8 flex items-center justify-center  w-full">
        <form className="w-[50%]">
          <h1 className="_h1">Personal Details</h1>
          <div className="edit-resume-item">
            <input placeholder="Name" />
            <input placeholder="Last Name" />
          </div>
          <div className="edit-resume-item">
            <input type="number" inputMode="tel" placeholder="Mobile No- +91" />
          </div>
          <div className="edit-resume-item">
            <input type="email" inputMode="email" placeholder="Email" />
          </div>
          <div className="edit-resume-item">
            <input placeholder="City" />
            <input placeholder="Country" />
          </div>
          <div className="edit-resume-item">
            <input placeholder="Professional Title e.g Full Stack Developer" />
            <input placeholder="Describe yourself in one or two lines" />
          </div>
          <div className="edit-resume-item">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between gap-2 items-center">
                <input
                  className="input-primary w-full"
                  type="url"
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
          <div className="input-interest">
            {[].map((item: any, index) => {
              return (
                <div key={item.id}>
                  <input
                    defaultValue={item.hobbie}
                    placeholder="Interest/Hobbies e.g Chess"
                  />
                </div>
              );
            })}
          </div>
          <div className="add-input-block">
            <div></div>
          </div>
          Technical Skills
          {[].map((item: any, index) => {
            return (
              <React.Fragment key={item.id}>
                <input
                  defaultValue={item.skill}
                  placeholder="Technical Skills e.g Javascript"
                />
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="10"
                  defaultValue={item.rate}
                  placeholder="Rate your skill out of 10"
                />
                {index !== 0 ? (
                  <div className="input-remove">
                    <div>
                      <div>Remove</div>
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
          <div className="add-input-block">
            <div></div>
          </div>
          {/*   Work Experience  */}
          {/*  <div className="input-head">Work Experience (if any?)</div> */}
          {/*  {[].map((item: any, index) => { */}
          {/*    return ( */}
          {/*      <React.Fragment key={item.id}> */}
          {/*        <div className="input-index">{index + 1}.</div> */}
          {/*        <input */}
          {/*          defaultValue={item.worktitle} */}
          {/*          placeholder="Title/Position" */}
          {/*        /> */}
          {/*        <input */}
          {/*          defaultValue={item.company} */}
          {/*          placeholder="Workplace/Company" */}
          {/*        /> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.description} */}
          {/*          placeholder="Description about your work in one or two lines" */}
          {/*        /> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.tags} */}
          {/*          placeholder="Link, Tags, Tech-stack or anything" */}
          {/*        /> */}
          {/*        <div className="year"> */}
          {/*          <input */}
          {/*            name="year" */}
          {/*            inputMode="numeric" */}
          {/*            defaultValue={item.yearfrom} */}
          {/*            placeholder="mm/yy" */}
          {/*          /> */}
          {/*          {![1, 2].includes(index) ? ( */}
          {/*            <> */}
          {/*              <>-</> */}
          {/*              <input */}
          {/*                name="year" */}
          {/*                inputMode="numeric" */}
          {/*                defaultValue={item.yearto} */}
          {/*                placeholder="mm/yy" */}
          {/*              /> */}
          {/*            </> */}
          {/*          ) : null} */}
          {/*          <input type="checkbox" /> */}
          {/*          <span className="input-span">Present?</span> */}
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
          {/*   Personal Projects  */}
          {/*  <div className="input-head">Personal Projects</div> */}
          {/*  {[].map((item: any, index) => { */}
          {/*    return ( */}
          {/*      <React.Fragment key={item.id}> */}
          {/*        <div className="input-index">{index + 1}.</div> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.name} */}
          {/*          placeholder="Project Title" */}
          {/*        /> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.tech} */}
          {/*          placeholder="Tech Used e.g Html, Python (Use comma and space)" */}
          {/*        /> */}
          {/*        <input */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.description} */}
          {/*          placeholder="Project Description (Optional)" */}
          {/*        /> */}
          {/*        <input */}
          {/*          type="url" */}
          {/*          className="singlefield" */}
          {/*          defaultValue={item.link} */}
          {/*          placeholder="Link (Optional)" */}
          {/*        /> */}
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
          {/*  <div className="input-head">Courses/Trainings & Certificates</div> */}
          {/* Course Fields  */}
          {/*  {[].map((item: any, index) => { */}
          {/*    return ( */}
          {/*      <React.Fragment key={item.id}> */}
          {/*        <div className="input-index">{index + 1}.</div> */}
          {/*        <input */}
          {/*          defaultValue={item.name} */}
          {/*          placeholder="Course/Certificate Name" */}
          {/*        /> */}
          {/*        <input */}
          {/*          defaultValue={item.provider} */}
          {/*          placeholder="Course Provider Name" */}
          {/*        /> */}
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
          {/*  <div className="input-head">Social/Links</div> */}
          {/*  <input placeholder="LinkedIn Url" /> */}
          {/*  <input placeholder="GitHub Url" /> */}
          {/*  <input */}
          {/*    className="singlefield" */}
          {/*    placeholder="Portfolio Url or any other (Optional)" */}
          {/*  /> */}
        </form>
      </div>
    </div>
  );
};
