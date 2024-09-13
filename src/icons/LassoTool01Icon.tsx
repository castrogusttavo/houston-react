import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LassoTool01Icon({
  iconName = 'lasso-tool-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
