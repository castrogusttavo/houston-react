import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CovariateIcon({ iconName = 'covariate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
