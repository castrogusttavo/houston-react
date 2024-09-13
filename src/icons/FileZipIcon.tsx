import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileZipIcon({ iconName = 'file-zip', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
