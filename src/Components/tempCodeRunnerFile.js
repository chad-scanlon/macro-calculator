<div className="quality-box">
                <h4 className="qualities-header">Qualities</h4>
                {selectionList
                    ? selectionList.map((selection) => (
                          <>
                              {weightCreator(selection, targets)}
                              <div style={{ border: "solid black 1px" }}>
                                  <p>
                                      {selection.name} is 1st a {""}
                                      {selection.rank.first}
                                  </p>
                                  <p>
                                      {selection.name} is 2nd a {""}
                                      {selection.rank.second}
                                  </p>
                                  <p>
                                      {selection.name} is 3rd a {""}
                                      {selection.rank.third}
                                  </p>
                              </div>
                          </>
                      ))
                    : null}
                {targets ? testFunction(selectionList, targets) : null}
            </div>